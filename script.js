/*document.getElementById("year").textContent = new Date().getFullYear();

const links = {
  "0000": "+",
  "0404": "404",
  "0626": "626",
  "1016": "editor-nbt",
  "1631": "mcstructure/bow.mcstructure",
  "2176": "mcstructure/firework.mcstructure",
  "1936": "mcstructure/shield.mcstructure",
  "1944": "mcstructure/elytra.mcstructure",
  "1044": "mcstructure/camera.mcstructure",
  "1731": "mcstructure/nether_portal.mcstructure",
  "1396": "mcstructure/end_portal.mcstructure",
  "1611": "mcstructure/ender_portal.mcstructure",
  "1367": "editor-nbt"
};

function handleInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.hash = input.value.trim().toLowerCase();
    input.value = "";
  }
}

function router() {
  const hash = window.location.hash.substring(1).toLowerCase();

  const bio = document.getElementById("bio-ui");
  const redirect = document.getElementById("redirect-ui");
  const error = document.getElementById("error-ui");
  const progress = document.getElementById("progress");
  const targetName = document.getElementById("target-name");

  bio.style.display = "none";
  redirect.style.display = "none";
  error.style.display = "none";

  if (!hash) {
    bio.style.display = "block";
    return;
  }

  if (links[hash]) {
    redirect.style.display = "block";
    targetName.textContent = `#${hash}`;

    setTimeout(() => {
      progress.style.width = "100%";
    }, 100);

    setTimeout(() => {
      window.location.href = links[hash];
    }, 1300);
  } else {
    error.style.display = "block";
  }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);*/

// ===== YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

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

  const bio = document.getElementById("bio-ui");
  const redirect = document.getElementById("redirect-ui");
  const error = document.getElementById("error-ui");
  const progress = document.getElementById("progress");
  const targetName = document.getElementById("target-name");

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
  targetName.textContent = `#${action.id}`;

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
