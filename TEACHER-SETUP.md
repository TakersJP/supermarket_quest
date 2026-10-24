# Getting Class Reports in a Google Sheet

Each student gets **one row per day** in your Google Sheet. It covers everything they did in that class: missions finished, where they stopped, minutes played, a rating for each skill, and common mistakes the game noticed.

**Students don't do anything.** They type their full name (first and last) on the main menu and play. The game quietly updates their row in the background:
- every 90 seconds while they play
- each time they finish a mission
- when they close the game (Home button, closing Safari, or switching apps)

There is no button and no message about sending, so students won't notice. You can also watch rows update **live** during class.

**At the end of class:** tell students to stop and press the Home button (or close Safari). Their row is then up to date.

You only do this setup once. It takes about 10 minutes.

> **Already set up the earlier version?** Only do **Step 2** again (paste the new script) and then **"Updating the script"** at the bottom. Your link stays the same, so you don't need to change `settings.js`.

## Step 1: Make the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a **blank spreadsheet**.
2. Name it something like **Supermarket Quest Reports**.

## Step 2: Add the receiver script

1. In the spreadsheet, click **Extensions → Apps Script**.
2. Delete everything in the code box.
3. Open the file `teacher-setup/ReportReceiver.gs` from the game folder, copy all of it, and paste it into the code box.
4. Click the **💾 Save** icon.

## Step 3: Publish it as a web app

1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear next to "Select type" and choose **Web app**.
3. Fill in:
   - **Execute as:** Me
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Google asks you to **Authorize access**. Choose your account.
   - If you see "Google hasn't verified this app", click **Advanced → Go to (project name)**. This is your own script, so it's safe.
   - Click **Allow**. This lets the script add and update rows in your spreadsheet.
6. Copy the **Web app URL**. It starts with `https://script.google.com/macros/s/` and ends with `/exec`.

**Check it works:** paste the URL into a new browser tab. You should see "Supermarket Quest report receiver is working."

## Step 4: Put the link in the game (kept secret on GitHub)

The link is stored as a hidden **secret** on GitHub, not in the game's files, so nobody browsing your repository can see it.

1. On GitHub, open your repository and go to **Settings → Secrets and variables → Actions**.
2. Click **New repository secret**.
   - **Name:** `REPORT_URL`
   - **Secret:** paste your Web app URL
   - Click **Add secret**.
3. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Make sure your repository has the file `.github/workflows/deploy.yml` from the game folder. To add it on the GitHub website: **Add file → Create new file**, type `.github/workflows/deploy.yml` as the name, paste the file's contents, and click **Commit changes**.
5. Open the **Actions** tab. A "Publish game" run starts automatically. Wait for the green ✅ (about a minute).

From now on, every time you upload or change files, the game republishes itself with the secret link added.

**Optional:** to name your class in the sheet, set `className` in `settings.js`, for example `className: 'Room 12'`. Leave `reportUrl` empty in that file.

That's it. On the main menu, students now need to type their full name before they can choose a mission.

> **Note:** the live game still contains the link, because iPads need it to send reports, but it no longer appears anywhere in your repository. The link can only *send* reports. It can't show your sheet.

## What you'll see in the sheet

A **Class Reports** tab is created automatically, with one row per student per day:

| Column | Example |
|---|---|
| Date, Class, Student | 2026-10-24, Room 12, Mia |
| Minutes played | 48 (time away from the game isn't counted) |
| Missions finished | Family Dinner, School Party (2x) |
| Stopped at | Super Shopper: checkout, paying |
| Answers | 87 right out of 102 |
| One column per skill | ⭐⭐⭐ (31 right, 2 wrong, 1 hints) |
| Did well (⭐⭐⭐ skills) | Skip counting, Adding the total |
| Getting there (⭐⭐ skills) | Counting backward |
| Needs practice (⭐ skills) | Making change |
| Mistakes noticed | Wrote cents where dollars were needed (2x) |

**Stars:** ⭐⭐⭐ strong · ⭐⭐ getting there · ⭐ needs practice · — not practised that day.
Hints count as half a mistake, so a student who used lots of hints gets a lower rating than one who didn't.

**Tip:** Use **Data → Create a filter** on the Date column to see just today's class, or on the Student column to see one student's progress over several days. Sort by "Needs practice" to plan small groups.

If you had the earlier version, the old **Reports** tab stays as it was. You can delete it.

## Good to know

- **One row per day:** the same name on the same day updates the same row, even if the page is reloaded. Capitals and extra spaces don't matter ("mia kim" and "Mia Kim" are the same). A different spelling ("Mia Kimm") starts a new row, so it helps to remind students to write their name the same way each time.
- **Shared iPads:** when a new student types their name, the previous student's row is sent first, then a new row starts.
- **No internet?** Progress is kept on the iPad and sends by itself once the internet is back and the game is open.
- **Privacy:** only the student's name and game results are sent, straight to your own Google Sheet. Nothing is stored anywhere else.
- **"Who has access: Anyone"** means anyone with the secret link could add a row, but nobody can *read* your sheet. Don't post the link publicly.
- **If your school account won't allow "Anyone":** some school Google admins block it. Ask your tech support to allow it, or do the setup with a personal Google account.
## Updating the script

Whenever `ReportReceiver.gs` changes, paste the new code over the old (Step 2), save, then:

1. Click **Deploy → Manage deployments**.
2. Click the **✏️ pencil** (Edit).
3. Under **Version**, choose **New version**.
4. Click **Deploy**.

Your link stays the same. If Google asks you to authorize again, follow Step 3, point 5.
