// ===== INPUT =====
function fwxInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.href = /^\d+$/.test(input.value) ? input.value.padStart(4, '0') : input.value;;
    input.value = "";
  }
}

// ===== ACTION HANDLER =====
function fwxRedirect(action) {
  switch (action.type) {
    case "navigate":
      if (action.target == "_self") {
        window.location.href = 'https://sfwx.github.io/' + action.value;
      }
    break;
    case "external_link":
      if (action.target == "_self") {
        window.location.href = action.value;
      }
      else if (action.target == "_blank") {
        window.open(action.value, "_blank");
      }
    break;
    case "file_download":
      const a = document.createElement("a");
      a.href = action.value;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    break;
    case "download_redirect":
      if (action.target == "_self") {
        window.location.href = action.value;
      }
    break;
    default:
      console.warn("Tipo desconhecido:", action.type);
    break;
  }
}

// ===== ROUTER =====
let currentAction = null;
function fwxRouter() {
  const rawHash = window.location.hash.substring(1).toLowerCase();
  const hash = /^\d+$/.test(rawHash) ? rawHash.padStart(4, '0') : rawHash;

  const bio = document.getElementById("fwxBio");
  const redirect = document.getElementById("fwxRedirect");
  const image = document.getElementById("fwxImage");
  const title = document.getElementById("fwxTitle");
  const subtitle = document.getElementById("fwxSubTitle");
  const description = document.getElementById("fwxDescription");
  const progress = document.getElementById("fwxProgress");
  const button = document.getElementById("fwxButton");
  const error = document.getElementById("fwxError");

  // reset UI
  bio.style.display = "none";
  redirect.style.display = "none";
  progress.style.width = "0%";
  button.style.display = "none";
  error.style.display = "none";

  if (!hash) {
    bio.style.display = "block";
    return;
  }

  currentAction = actions[hash];
  if (!actions[hash] || actions[hash].enabled === false) {
    error.style.display = "block";
    return;
  }

  // ===== REDIRECT UI =====
  redirect.style.display = "block";
  image.src = actions[hash].image;
  title.textContent = actions[hash].title;
  subtitle.textContent = actions[hash].subtitle;
  description.textContent = actions[hash].description;
  requestAnimationFrame(() => {
    progress.style.width = "100%";
  });
  setTimeout(() => {
    if (!actions[hash].confirm.enabled) {
      button.textContent = actions[hash].confirm.message;
      button.style.display = "block";
      fwxRedirect(actions[hash]);
    }
    else {
      button.textContent = actions[hash].confirm.message;
      button.style.display = "block";
    }
  }, 1300);
}

// ===== EVENTS =====
window.addEventListener("load", fwxRouter);
window.addEventListener("hashchange", fwxRouter);
