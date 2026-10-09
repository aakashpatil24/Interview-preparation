# Interview Practice Tracker

A responsive React application for tracking weekly interview preparation.

## Tech Stack

- React
- Vite
- CSS
- Browser LocalStorage

## Features

- Dashboard statistics:
  - Total questions
  - Completed DSA problems
  - Completed Git and Technical interview questions
- Separate machine-coding project status
- Add questions with category, difficulty, and status
- Update question status
- Delete questions with confirmation
- Case-insensitive title search
- Category, difficulty, and status filters
- Visual completion percentage
- LocalStorage persistence:
  - On the very first load (nothing saved yet), the tracker seeds itself
    with 15 starter questions (5 DSA, 5 Git, 5 Technical) and saves them
  - From then on, the app reads only from LocalStorage — edits, added
    questions, and deletions (including of starter questions) persist
    and are never re-seeded
- Form validation
- Empty and no-results states
- Responsive mobile and desktop layouts
- Light and dark mode, with a toggle in the navbar
  - Defaults to the OS/browser color-scheme preference on first visit
  - Choice is remembered in LocalStorage and applied before React mounts
    to avoid a flash of the wrong theme
- Accessible labels, focus indicators, and feedback messages

## Setup

Use a Node.js version supported by the installed Vite version.

```bash
git clone <your-repository-url>
cd interview-practice-tracker
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Project Structure

- `components/`: UI building blocks (including `components/icons/` for the
  app and theme icons)
- `contexts/`: Shared practice data and update actions
- `hooks/`: LocalStorage persistence and theme (light/dark) management
- `pages/`: Dashboard composition
- `constants/`: Shared options and storage validation
- `utils/`: Small shared helpers (e.g. ID generation)

## Assumptions

- Categories are DSA, Git, and Technical.
- Statuses are Pending, In Progress, and Completed.
- Completed interview questions means completed Git and Technical questions.
- Progress is completed questions divided by all stored questions.
- Machine-coding status is independent and excluded from question progress.
- Data stays in the current browser and does not sync between devices.
- The application maintains one practice list; automatic weekly resets
  and historical weeks are outside the current scope.
- Duplicate question titles are allowed for repeated practice.
- Newest questions appear first.
- Search and filters are not persisted.
- Invalid stored data is replaced with the default starter question set
  and a warning.
- The 15 starter questions (DSA from a given LeetCode list, Git/GitHub
  scenario questions, and fullstack technical questions) are only a
  first-run default; once saved, they behave like any other question.
- Difficulty was not specified for the Git and Technical starter
  questions, so Medium (or Hard for the two most involved technical
  scenarios) was assigned as a reasonable default.
- No authentication or backend is required.
- Theme preference (light/dark) is stored separately from practice data
  under its own LocalStorage key and is per-browser, not per-account.
- If no theme preference is saved yet, the app follows the OS/browser
  `prefers-color-scheme` setting.
- Question IDs use `crypto.randomUUID()` when available (secure contexts)
  and fall back to a timestamp-based random ID otherwise.

## Deployment

Deploy on Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`

## Deliverables

- GitHub repository: [aakashpatil24/Interview-preparation](https://github.com/aakashpatil24/Interview-preparation)
- Live application: [interview-preparation-blond.vercel.app](https://interview-preparation-blond.vercel.app/)

## Possible Improvements

- Edit question titles and metadata
- Weekly history and date-based filtering
- Export and import data
- Backend synchronization
- Automated component tests
