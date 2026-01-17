// ===== YEAR =====
document.getElementById("fwxYear").textContent = new Date().getFullYear();

// ===== ACTIONS (NOVO FORMATO JSON) =====
const actions = {
  "0000": {
    "id": "0000",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Conversor numérico",
    "description": "Conversor numérico para transformar palavras em uma numeração de 4 dígitos. Apenas para fins técnicos;",
    "value": "../+",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessar"
    }
  },
  "0404": {
    "id": "0404",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Área desconhecida!",
    "description": "Você foi longe demais… esse atalho não está no mapa!",
    "value": "../404",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessar"
    }
  },
  "0626": {
    "id": "0626",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "FwX Perfil pessoal",
    "description": "Ainda incompleto!!",
    "value": "626",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessar"
    }
  },
  "1016": {
    "id": "1016",
    "enabled": true,
    "type": "navigator",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Acessando Editor NBT",
    "description": "Editor online de NBT e JSON para itens, feito para criar, editar e validar dados de forma rápida e organizada.",
    "value": "../editor-nbt",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessar"
    }
  },
  "1631": {
    "id": "1631",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Arco de Operador",
    "description": "Clique para baixar o arquivo do incrível Arco de Operador!",
    "value": "../mcstructure/bow.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "2176": {
    "id": "2176",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Fogos de Artifício",
    "description": "Clique para baixar o arquivo de Fogos de Artifício de Operador!",
    "value": "../mcstructure/firework.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1936": {
    "id": "1936",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Escudo de Operador",
    "description": "Clique para baixar o arquivo do incrível Escudo de Operador!",
    "value": "../mcstructure/shield.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1944": {
    "id": "1944",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Asas de Operador",
    "description": "Clique para baixar o arquivo das incríveis Asas de Operador!",
    "value": "1944../mcstructure/elytra.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1044": {
    "id": "1044",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Give Camera",
    "description": "Clique para baixar o arquivo do Item de Câmera.",
    "value": "../mcstructure/camera.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1731": {
    "id": "1731",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Give Nether Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Nether.",
    "value": "../mcstructure/nether_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1396": {
    "id": "1396",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Give End Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do End.",
    "value": "../mcstructure/end_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1611": {
    "id": "1611",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Give Ender Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Ender.",
    "value": "../mcstructure/ender_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar"
    }
  },
  "1367": {
    "id": "1367",
    "enabled": true,
    "type": "navigator",
    "image": "https://sfwx.githut.io/index1.png",
    "title": "Câmera Orbe",
    "description": "Acessando editor online de NBT e JSON para itens, feito para criar, editar e validar dados de forma rápida e organizada.",
    "value": "../editor-nbt",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Confirmar"
    }
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
  button.style.display = "none";

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
