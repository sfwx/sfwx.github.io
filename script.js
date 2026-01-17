// ===== YEAR =====
document.getElementById("fwxYear").textContent = new Date().getFullYear();

// ===== ACTIONS (NOVO FORMATO JSON) =====
const actions = {
  "0000": {
    id: "0000",
    type: "navigate",
    enabled: true,
    title: "Home",
    value: "+"
  },

  "0404": {
    id: "0404",
    type: "navigate",
    enabled: true,
    title: "404",
    value: "404"
  },

  "0626": {
    id: "0626",
    type: "navigate",
    enabled: true,
    title: "Projeto 626",
    value: "626"
  },

  "1631": {
    id: "1631",
    type: "file_download",
    enabled: true,
    title: "Bow",
    value: "mcstructure/bow.mcstructure"
  },

  "2176": {
    id: "2176",
    type: "file_download",
    enabled: true,
    title: "Firework",
    value: "mcstructure/firework.mcstructure"
  }
};

// ===== INPUT =====
function handleInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.hash = input.value.trim().toLowerCase();
    input.value = "";
  }
}

// ===== ROUTER =====
function router() {
  const hash = window.location.hash.substring(1).toLowerCase();

  const bio = document.getElementById("fwxBio");
  const redirect = document.getElementById("fwxRedirect");
  const image = document.getElementById("fwxImage");
  const title = document.getElementById("fwxTitle");
  const description = document.getElementById("fwxDescription");
  const progressBar = document.getElementById("fwxProgressBar");
  const progress = document.getElementById("fwxProgress");
  const button = document.getElementById("fwxButton");
  const error = document.getElementById("fwxError");

  // reset UI
  bio.style.display = "none";
  redirect.style.display = "none";
  error.style.display = "none";
  progress.style.width = "0%";

  if (!hash) {
    bio.style.display = "block";
    return;
  }

  const action = actions[hash];

  if (!action || action.enabled === false) {
    error.style.display = "block";
    return;
  }

  // ===== REDIRECT UI =====
  redirect.style.display = "block";
  title.textContent = `#${action.id}`;

  setTimeout(() => {
    progress.style.width = "100%";
  }, 100);

  setTimeout(() => {
    executeAction(action);
  }, action.delay || 1300);
}

// ===== ACTION HANDLER =====
function executeAction(action) {
  switch (action.type) {
    case "navigate":
      window.location.href = action.value;
      break;

    case "external_link":
      window.open(action.value, "_blank");
      break;

    case "file_download":
      downloadFile(action.value);
      break;

    case "download_redirect":
      window.location.href = action.value;
      break;

    default:
      console.warn("Tipo desconhecido:", action.type);
  }
}

// ===== DOWNLOAD LOCAL =====
function downloadFile(path) {
  const a = document.createElement("a");
  a.href = path;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ===== EVENTS =====
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
