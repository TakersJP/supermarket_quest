# Supermarket Quest 🛒

A Grade 3 math game about skip counting, number patterns, budgeting and Canadian money.
It is plain HTML, CSS and JavaScript. It needs no internet connection, no login and no installation.

## Files

| File | What it is |
|---|---|
| `index.html` | The page and all game screens |
| `style.css` | All visuals: store, shelves, receipt, cash register and Canadian money |
| `script.js` | Game logic: missions, questions, answer checking, budget, checkout |
| `settings.js` | Teacher settings: your report link and class name |
| `TEACHER-SETUP.md` + `teacher-setup/` | How to get student reports in a Google Sheet |

The graphics are built from emoji and CSS, so there are no image files. Keep the three files together in one folder.

## Play on one computer

Double-click `index.html`. It opens in any modern browser (Chrome, Safari, Edge or Firefox).

## Put it on classroom iPads

On iPad, Safari can't reliably open an `.html` file from the Files app, so serve the folder over the network. Choose one option:

### Option A: Free static hosting (easiest, works anywhere)
1. Upload the folder to a static host your school allows, such as GitHub Pages, Netlify Drop (drag the folder onto app.netlify.com/drop) or your school's web server.
2. Share the link with students, for example as a QR code on the board or a post in your LMS.
3. On each iPad, open the link in Safari, tap **Share → Add to Home Screen**. The game then opens full-screen like an app.

### Option B: Serve from the teacher's computer on the classroom Wi-Fi
1. On a Mac, open Terminal in the game folder and run:
   ```
   python3 -m http.server 8000
   ```
2. Find the computer's IP address (System Settings → Wi-Fi → Details), for example `192.168.1.25`.
3. On each iPad, on the same Wi-Fi, open `http://192.168.1.25:8000` in Safari.
4. Keep the Terminal window open while students play.

### Option C: MDM / Google Classroom / Seesaw
If your school manages iPads with an MDM, or you use an LMS that can host web files, upload the folder there and link to `index.html`.

**Tip:** Use landscape orientation. The layout also works in portrait and on smaller screens.

## How the game works

1. **Mission briefing.** Students see the shopping list, the quantities, the price of each item and their budget.
2. **Shopping.** Students tap an item on the shelf. Before the item goes into the cart, they must answer a skip-counting question:
   - extending a counting pattern ("You have 2 apples costing $6. How much will 3 apples cost?")
   - filling in the next number in a pattern
   - repeated addition
   - finding a pattern rule ("Add ___")
   - counting backward (the Challenge mission, and any time an item is put back)
   - decreasing "sale price" patterns, used for treats and single items

   Wrong answers get a supportive message and the item is not added. The **💡 Hint** button gives up to two hints that never state the answer. Items that are not on the list ("distractors") remind students to stick to their list. The cart shows each item's skip-counting sequence, but **never** the overall total.
3. **Checkout.** One screen, with the receipt on the left and the cash register on the right:
   - **Receipt:** students type what each grocery costs and the total cost. Wrong boxes turn red, and each box has its own hint.
   - **Budget check:** students decide whether they have enough money in their wallet. If they're over budget, they work out by how much, go back to the store, swap a treat and come back.
   - **Pay:** the register stays locked until the receipt is done. Students tap Canadian coins and bills (5¢, 10¢, 25¢, $1 loonie, $2 toonie, $5, $10, $20, $50). The register shows how much they've selected, but students decide whether it's enough.
   - **Change:** students work out their change. In the Challenge mission, a bonus step asks them to show the same total a second, different way.
4. **Mission Complete.** A celebration screen shows groceries bought, money spent, budget remaining, change received and the skills practised.

There are no timers and no penalties.

## Missions

| Mission | Level | Budget | Focus |
|---|---|---|---|
| Family Dinner | Easy | $35 | Whole-dollar prices; skip count by 2, 3, 4, 5 |
| School Party | Medium | $50 | 25¢ and 50¢ items; whole-dollar treats; skip count by 5, 10, 25; choose 1 treat that fits the budget |
| Super Shopper | Challenge | $100 | Larger list; forward and backward patterns; choose 2 treats; pay two ways |

All prices are multiples of 5¢, so Canadian cash rounding is never needed. Every mission has several treat choices that fit the budget, and at least one that does not, so students make a real decision.

### Answer key (for teachers)
- **Family Dinner:** Apples 4 × $3 = $12, Milk 2 × $5 = $10, Bread 1 × $4 = $4, Juice 2 × $2 = $4. Total **$30**, remaining **$5**.
- **School Party:** Pizza 2 × $10 = $20, Juice Packs 3 × $5 = $15, Stickers 8 × 25¢ = $2, Balloons 6 × 50¢ = $3. The list totals **$40**, which leaves **$10** for one treat. Cupcakes ($10), Fruit Tray ($8), Cookies ($6) and Popcorn ($4) fit. Party Cake ($12) does not.
- **Super Shopper:** Eggs 3 × $4 = $12, Cheese 4 × $5 = $20, Carrots 6 × $2 = $12, Chicken 3 × $10 = $30, Bananas 6 × 25¢ = $1.50, Cereal 3 × $3 = $9. The list totals **$84.50**, which leaves **$15.50** for two treats. Pairs that fit: Watermelon + Strawberries ($12), Watermelon + Popcorn ($10), Ice Cream + Strawberries ($14), Ice Cream + Popcorn ($12), and Strawberries + Popcorn ($8). Ice Cream + Watermelon ($16) is just over. The Big Cake ($15) never fits with a second treat.

## Answer formats students can type

`9`, `$9`, `9.00`, `3.50`, `3.5` and `3,50` all work. In questions shown in cents (with a ¢ box), a plain number like `200` means 200¢.

## Class reports for the teacher

Students type their full name (first and last) on the main menu. While they play, the game quietly keeps **one row per student per day** up to date in your Google Sheet. The row shows missions finished, where they stopped, minutes played, a star rating for each skill, and common mistakes. There's no button, and students don't need an email address or a sign-in. At the end of class, have students press the Home button or close Safari, and their final progress is sent.

This is set up through **[TEACHER-SETUP.md](TEACHER-SETUP.md)** (about 10 minutes, done once). Reports need internet. Progress made offline waits on the iPad and sends once the internet is back.

## Saved progress

Completed missions get a ✅ on the menu. The sound on/off setting is also remembered on that iPad, using the browser's local storage. If local storage is blocked, the game still works; it just won't remember these.
