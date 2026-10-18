
const CONFIG = {
  githubProfile: "https://github.com/Snayza",
  contactUrl: "https://github.com/Snayza",
  projects: {
    sentinelx: "https://github.com/Snayza/SNAYZA-SentinelX",
    CybersecurityToolkit: "https://github.com/Snayza/SNAYZA-Cybersecurity-Toolkit",
    phishing: "https://github.com/Snayza/SNAYZA-Phishing-Awareness"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("githubProfileLink").href = CONFIG.githubProfile;
  document.getElementById("contactGithub").href = CONFIG.contactUrl;
  document.querySelectorAll("[data-repo]").forEach(a => {
    const key = a.dataset.repo;
    if (CONFIG.projects[key]) a.href = CONFIG.projects[key];
  });

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const form = document.getElementById("terminalForm");
  const input = document.getElementById("terminalInput");
  const output = document.getElementById("terminalOutput");
  const clear = () => { output.innerHTML = ""; };
  const commands = {
    help: "Available commands:\n  help      Show this list\n  about     Learn about SNAYZA\n  projects  List portfolio projects\n  skills    Show technologies\n  contact   Show GitHub link\n  date      Show local date and time\n  whoami    Show demo visitor identity\n  pwd       Show demo directory\n  ls        List demo files\n  matrix    Display a message\n  clear     Clear terminal",
    about: "SNAYZA — developer in progress, focused on cybersecurity, Python, automation, and web development. Mission: learn by building.",
    projects: "01 SentinelX — file integrity monitoring & secret scanning\n02 SNAYZA-Cybersecurity-Toolkit — A small Python terminal project for learning basic cybersecurity concepts\n03 Phishing Awareness — educational awareness tool",
    skills: "PYTHON — automation & CLI tools\nHTML / CSS — responsive interfaces\nJAVASCRIPT — front-end interactivity\nGIT — version control\nLINUX — system fundamentals\nStatus: learning and improving.",
    contact: "GitHub profile: " + CONFIG.githubProfile,
    date: () => new Date().toLocaleString(),
    whoami: "visitor — access level: public. This is a portfolio demo, not a real shell.",
    pwd: "/portfolio/demo",
    ls: "about.md  projects/  skills.json  contact.txt  README.md",
    matrix: "Wake up, developer. The code is yours to explore. Keep learning; stay ethical."
  };
  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const entered = document.createElement("p");
    entered.textContent = "visitor@snayza:~$ " + raw.trim();
    entered.style.color = "#fff";
    output.appendChild(entered);
    if (cmd === "clear") { clear(); return; }
    const result = commands[cmd];
    const response = document.createElement("p");
    response.textContent = result ? (typeof result === "function" ? result() : result) : "Command not found: " + cmd + ". Type 'help' to see available commands.";
    response.style.color = result ? (cmd === "help" || cmd === "whoami" || cmd === "matrix" ? "#8cdda6" : "#b6adb9") : "#ff6479";
    response.style.whiteSpace = "pre-wrap";
    output.appendChild(response);
    output.scrollTop = output.scrollHeight;
  }
  form.addEventListener("submit", e => { e.preventDefault(); run(input.value); input.value = ""; input.focus(); });
  document.getElementById("clearTerminal").addEventListener("click", () => { clear(); input.focus(); });
  document.querySelectorAll("[data-command]").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.command === "clear") clear(); else run(b.dataset.command);
    input.focus();
  }));
});
