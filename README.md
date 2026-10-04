# IntervueAI

AI interview preparation website: interview practice, timed mock interviews, resume/ATS analysis, coding practice, feedback and performance tracking.

**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO/ *(update after deploying)*
**Repository:** https://github.com/YOUR-USERNAME/YOUR-REPO *(update after pushing)*

> **Demo notice:** this is a frontend-only project. All scores, feedback, ATS results, test cases, the dashboard feed and the chatbot use mock data and rule-based logic. There is no real AI model, backend, database or authentication.

## Features
- **Dashboard:** profile, practice modules, daily challenge, sample activity feed and leaderboard
- **AI Interview:** role, level and type setup, question, answer, mock feedback, next question
- **Mock Interviews:** category, role, difficulty and duration, timed 5-question round, per-question review, downloadable report
- **Resume / ATS:** upload UI, job description input, sample ATS report
- **Coding Practice:** problem list with filters, editor-style UI, mock run/submit results
- **Feedback** and **Performance:** score cards, skill breakdown, trend graph, practice heatmap
- **Login / Signup:** frontend-only validation
- **Demo chatbot:** keyword-based assistant on every page that links to the right feature

## Tech
HTML5, CSS3 and vanilla JavaScript only. No build step, no dependencies.

## Project structure
```
index.html            Landing page
pages/                One HTML file per feature, plus login and signup
css/                  style.css, components.css, home.css, chatbot.css, responsive.css
js/                   api.js (mock data layer), navbar.js, main.js, chatbot.js, one script per page
assets/               images, logo
.github/workflows/    GitHub Pages deployment
```

## Run locally
Option 1: open `index.html` in a browser.

Option 2 (recommended): serve it over HTTP.
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Deploy to GitHub Pages
1. Push this folder to a GitHub repository (branch `main`).
2. In the repo go to **Settings → Pages**, and set **Source** to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) runs on every push to `main`. When it finishes, the site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

Other static hosts (Netlify, Vercel, Cloudflare Pages) also work: no build command, publish directory is the repository root.

## Connecting a real backend later
All data access goes through the `API` object in `js/api.js`. Replace each function body with a `fetch()` call to your server; the page scripts do not need to change. The chatbot's `reply()` function in `js/chatbot.js` can be replaced the same way.

## Known limitations
- Mock data only; nothing is saved between sessions
- Resume files are not read or uploaded anywhere
- Inter font loads from Google Fonts (falls back to system fonts offline)
