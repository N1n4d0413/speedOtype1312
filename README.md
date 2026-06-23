# SpeedoType

Live Demo: https://speedotypebyn1n4d.web.app/

SpeedoType is a simple one-page typing speed test built with React and Vite. It measures typing speed in WPM, tracks accuracy in real time, saves the best score locally, and includes light/dark mode.

## Problem Statement

Typing practice tools are often cluttered with extra screens and unnecessary features. This project focuses on one thing: helping users test typing speed and accuracy quickly in a clean single-page interface.

## Solution

SpeedoType presents a random prompt, lets the user type it in a controlled text area, and updates WPM and accuracy as they type. The best score is saved in `localStorage`, so progress is preserved across refreshes.

## Features

- Random typing prompts
- Live WPM calculation
- Live accuracy tracking
- Best score saved in local storage
- Light and dark theme toggle
- Restart button for a new test
- Copy prevention on the prompt
- Paste prevention in the input box

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- React Icons
- LocalStorage
- Firebase Hosting

## Project Architecture

The app is intentionally small and component-based:

- `App.jsx` manages theme state and best score state.
- `Navbar.jsx` shows the app name, best score, and theme toggle.
- `Home.jsx` handles prompt selection, typing input, WPM, accuracy, and restart behavior.
- `localStorage` keeps the best score and theme preference across sessions.
- `firebase.json` configures static deployment for Firebase Hosting.

## Folder Structure

```text
Project-1/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |   |-- hero.png
|   |   |-- react.svg
|   |   `-- vite.svg
|   |-- components/
|   |   |-- Navbar.jsx
|   |   `-- Navbar.css
|   |-- pages/
|   |   |-- Home.jsx
|   |   `-- Home.css
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- firebase.json
|-- .firebaserc
|-- package.json
|-- vite.config.js
`-- README.md
```

## Installation

```bash
git clone https://github.com/N1n4d0413/speedOtype1312
cd Project-1
npm install
```

## Usage

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Screenshots

Add your main app screenshot here.

```md
![SpeedoType Home](assets/speedotype-home.png)
```

## Demo

- Live Demo: https://speedotypebyn1n4d.web.app/

## Future Scope

- Add more typing prompts
- Add difficulty levels
- Add a countdown mode
- Improve mobile responsiveness
- Add typing history or session stats
- Add more polished animations and UI states
- Add tests for typing logic

## License

MIT

## Author

Ninad Kathe 
