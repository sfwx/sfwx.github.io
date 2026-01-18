// ===== YEAR =====
document.getElementById("fwxYear").textContent = new Date().getFullYear();

// ===== ACTIONS (NOVO FORMATO JSON) =====
const actions = {
  "0000": {
    "id": "0000",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/index1.png",
    "title": "Conversor numérico",
    "description": "Conversor numérico para transformar palavras em uma numeração de 4 dígitos. Apenas para fins técnicos;",
    "value": "+",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "0404": {
    "id": "0404",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/index1.png",
    "title": "Área desconhecida!",
    "description": "Você foi longe demais… esse atalho não está no mapa!",
    "value": "404",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "0626": {
    "id": "0626",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/index1.png",
    "title": "FwX Perfil pessoal",
    "description": "Ainda incompleto!!",
    "value": "626",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "1016": {
    "id": "1016",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Editor NBT",
    "description": "Acessando editor online de NBT e JSON para itens, feito para criar, editar e validar dados de forma rápida e organizada.",
    "value": "editor-nbt",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "1631": {
    "id": "1631",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Arco de Operador",
    "description": "Clique para baixar o arquivo do incrível Arco de Operador!",
    "value": "mcstructure/bow.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "2176": {
    "id": "2176",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Fogos de Artifício",
    "description": "Clique para baixar o arquivo de Fogos de Artifício de Operador!",
    "value": "mcstructure/firework.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1936": {
    "id": "1936",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Escudo de Operador",
    "description": "Clique para baixar o arquivo do incrível Escudo de Operador!",
    "value": "mcstructure/shield.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1944": {
    "id": "1944",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Asas de Operador",
    "description": "Clique para baixar o arquivo das incríveis Asas de Operador!",
    "value": "mcstructure/elytra.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1044": {
    "id": "1044",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Give Camera",
    "description": "Clique para baixar o arquivo do Item de Câmera.",
    "value": "mcstructure/camera.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1731": {
    "id": "1731",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Give Nether Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Nether.",
    "value": "mcstructure/nether_portal.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1396": {
    "id": "1396",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Give End Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do End.",
    "value": "mcstructure/end_portal.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1611": {
    "id": "1611",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Give Ender Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Ender.",
    "value": "mcstructure/ender_portal.mcstructure",
    "target": "_blank",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1367": {
    "id": "1367",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/signature.png",
    "title": "Câmera Orbe",
    "description": "Acessando editor online de NBT e JSON para itens, feito para criar, editar e validar dados de forma rápida e organizada.",
    "value": "editor-nbt",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  }
};

// ===== INPUT =====
function fwxInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.hash = input.value.trim().toLowerCase();
    input.value = "";
  }
}

// ===== ACTION HANDLER =====
function fwxRedirect(action) {
  if (action.type == "navigate" && action.target == "_self") {
    window.location.href = 'https://sfwx.github.io/' + action.value;
  }
  else if (action.type == "navigate" && action.target == "_blank") {
    window.open('https://sfwx.github.io/' + action.value, "_blank");
  }
  else if (action.type == "external" && action.target == "_self") {
    window.location.href = action.value;
  }
  else if (action.type == "external" && action.target == "_blank") {
    window.open(action.value, "_blank");
  }
}

// ===== ROUTER =====
let currentAction = null;
function fwxRouter() {
  const hash = window.location.hash.substring(1).toLowerCase();

  const bio = document.getElementById("fwxBio");
  const redirect = document.getElementById("fwxRedirect");
  const image = document.getElementById("fwxImage");
  const title = document.getElementById("fwxTitle");
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

  const action = actions[hash];
  currentAction = action;
  if (!action || action.enabled === false) {
    error.style.display = "block";
    return;
  }

  // ===== REDIRECT UI =====
  redirect.style.display = "block";
  image.src = action.image;
  title.textContent = action.title;
  description.textContent = action.description;
  requestAnimationFrame(() => {
    progress.style.width = "100%";
  });
  setTimeout(() => {
    if (!action.confirm.enabled) {
      button.textContent = action.confirm.message;
      button.style.display = "block";
      fwxRedirect(action);
    }
    else {
      button.textContent = action.confirm.message;
      button.style.display = "block";
    }
  }, 1300);
}

// ===== EVENTS =====
window.addEventListener("load", fwxRouter);
window.addEventListener("hashchange", fwxRouter);
