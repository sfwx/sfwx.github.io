document.getElementById("year").textContent = new Date().getFullYear();

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
window.addEventListener("hashchange", router);
