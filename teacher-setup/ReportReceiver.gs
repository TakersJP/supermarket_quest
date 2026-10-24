/**
 * Supermarket Quest: class report receiver.
 * Paste this whole file into your Google Sheet's Apps Script editor
 * (Extensions > Apps Script). The game sends each student's progress every
 * couple of minutes. The "Class Reports" tab keeps ONE row per student per
 * day and updates it in place. See TEACHER-SETUP.md for the steps.
 */

var SHEET_NAME = 'Class Reports';

var HEADERS = [
  'Date', 'Class', 'Student', 'Minutes played', 'Missions finished', 'Stopped at', 'Answers',
  'Skip counting', 'Counting backward', 'Patterns and rules', 'Item costs',
  'Adding the total', 'Budget check', 'Paying', 'Making change',
  'Hints used', 'Did well', 'Getting there', 'Needs practice', 'Mistakes noticed',
  'Last update', 'Session ID'
];

var SKILL_KEYS = ['skip', 'backward', 'pattern', 'receipt', 'total', 'budget', 'pay', 'change'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // a whole class may send at the same moment
  try {
    var r = JSON.parse(e.postData.contents);
    if (!r.sessionId) return ContentService.createTextOutput('ignored');
    var skills = r.skills || {};
    var row = [r.date, r.className, r.name, r.minutes, r.finished, r.stoppedAt, r.answers]
      .concat(SKILL_KEYS.map(function (k) { return skills[k] || '—'; }))
      .concat([r.hints, r.didWell, r.gettingThere, r.practise, r.mistakes, new Date(), r.sessionId])
      .map(clean_);

    var sheet = getSheet_();
    var rowNum = findRow_(sheet, r.sessionId);
    if (rowNum) sheet.getRange(rowNum, 1, 1, row.length).setValues([row]);
    else sheet.appendRow(row);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

/** Lets you open the web app link in a browser to check it is working. */
function doGet() {
  return ContentService.createTextOutput('Supermarket Quest report receiver is working. (Version 2: one row per student per day)');
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME, 0);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(3);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#ffe9cc');
    sheet.getRange('A:A').setNumberFormat('@'); // keep dates as typed, e.g. 2026-10-24
    sheet.hideColumns(HEADERS.length);           // Session ID is only for matching rows
  }
  return sheet;
}

function findRow_(sheet, sessionId) {
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  var cell = sheet.getRange(2, HEADERS.length, last - 1, 1)
    .createTextFinder(sessionId).matchEntireCell(true).findNext();
  return cell ? cell.getRow() : 0;
}

/** Stops typed names like "=SUM(...)" from being treated as formulas. */
function clean_(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'string') {
    v = v.slice(0, 500);
    if (/^[=+\-@]/.test(v)) v = "'" + v;
  }
  return v;
}
