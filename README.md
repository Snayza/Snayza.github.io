# SNAYZA CyberSec Portfolio

Responsive black-and-crimson cybersecurity portfolio built with HTML, CSS, and vanilla JavaScript.

## Features
- Responsive desktop and mobile layout
- Cybersecurity-inspired black + red neon theme
- About, project, skills, and contact sections
- Interactive simulated terminal (`help`, `about`, `projects`, `skills`, `contact`, `date`, `whoami`, `pwd`, `ls`, `matrix`, `clear`)
- Configurable GitHub links in one place
- No frameworks, package installation, or build step required

## Run locally
1. Extract the ZIP.
2. Open `index.html` in your browser.

Optional local server from the project folder:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Your GitHub links
The `script.js` CONFIG is already populated with the links you supplied:
- Profile: https://github.com/Snayza
- SentinelX: https://github.com/Snayza/SNAYZA-SentinelX
- Cybersecurity Toolkit: https://github.com/Snayza/SNAYZA-Cybersecurity-Toolkit
- Phishing Awareness: https://github.com/Snayza/SNAYZA-Phishing-Awareness

To update them later, edit `const CONFIG` at the top of `script.js`. Keep the keys `sentinelx`, `threatlens`, and `phishing` unchanged so the project cards continue to work.

## Publish using GitHub Pages
1. Create a new public repository on GitHub, e.g. `snayza-cybersec-portfolio`.
2. Upload the **contents** of this folder (not the ZIP file): `index.html`, `style.css`, `script.js`, `README.md`, and `assets/`.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then save.
7. When deployment completes, the site URL will appear in the Pages settings.

## Structure
```text
SNAYZA-CyberSec-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

## Safety note
The terminal is a front-end simulation. It only responds to commands defined in `script.js`; it does not execute shell commands or run real cybersecurity operations.
