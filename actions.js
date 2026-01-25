const actions = {
  // Redirecionamento para o conversor numérico.
  "0000": {
    "id": "unknown",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwX · TCatDark",
    "subtitle": "Gerador de Tag",
    "description": "Gerador de Tag para transformar palavras em uma numeração de 4 dígitos. Apenas para fins técnicos;",
    "value": "tag-generator",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamento para página de erro.
  "0404": {
    "id": "404",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwX · TCatDark",
    "subtitle": "Área desconhecida!",
    "description": "Você foi longe demais… esse atalho não está no mapa!",
    "value": "404",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamento para a página de perfil.
  "0626": {
    "id": "626",
    "enabled": true,
    "type": "external_link",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwX · TCatDark",
    "subtitle": "Perfil pessoal",
    "description": "Acessando o perfil pessoal do Murilo.",
    "value": "https://instagram.com/fwx404",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamentos para projetos locais.
  "1164": {
    "id": "floralCapes",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/floral/index.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Floral Capes",
    "description": "Acessando o gerador de skins FloralCapes, onde você pode criar skins com o capas personalizadas.",
    "value": "floral",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "1016": {
    "id": "editor-nbt",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Editor NBT",
    "description": "Acessando editor online de NBT e JSON para itens, feito para criar, editar e validar dados de forma rápida e organizada.",
    "value": "mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "0903": {
    "id": "game-test",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX · TCatDark",
    "subtitle": "Game Test",
    "description": "Acessando jogo independente pessoal para fins de teste.",
    "value": "game-test",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamentos para projetos externos.
  "1783": {
    "id": "instagram-primary",
    "enabled": true,
    "type": "external_link",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwX · TCatDark",
    "subtitle": "Instagram",
    "description": "Acessando o perfil pessoal de Murilo no Instagram.",
    "value": "https://instagram.com/fwx404",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "1979": {
    "id": "instagram-secondary",
    "enabled": true,
    "type": "external_link",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwX · TCatDark",
    "subtitle": "Instagram",
    "description": "Acessando o perfil secundário de Murilo no Instagram.",
    "value": "https://instagram.com/fw.x00",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  "1954": {
    "id": "inventory-standoff2",
    "enabled": true,
    "type": "external_link",
    "image": "https://sfwx.github.io/image/icon0.png",
    "title": "FwXs · Standoff2",
    "subtitle": "Inventário",
    "description": "Acessando o Inventário pessoal do Murilo.",
    "value": "https://instagram.com/inv.fwx",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamentos para direitos autorais.
  "1788": {
    "id": "pixelated-buttons",
    "enabled": true,
    "type": "navigate",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX · Copyright",
    "subtitle": "Botões Pixelados",
    "description": "Este conteúdo encontra-se protegido pela legislação de direitos autorais.",
    "value": "copyright?type=minecraft",
    "target": "_self",
    "confirm": {
      "enabled": false,
      "message": "Acessando página.."
    }
  },
  // Redirecionamentos de arquivos para download.
  "2409": {
    "id": "floralCapes-texturePack",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/floral/index.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Floral Capes",
    "description": "Clique para baixar o pacote de textura do FloralCapes.",
    "value": "floral/fwxTexture.mcpack",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Pacote"
    }
  },
  // Redirecionamentos para arquivos de estrutura.
  "1631": {
    "id": "giveOperatorBow",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Arco de Operador",
    "description": "Clique para baixar o arquivo do incrível Arco de Operador!",
    "value": "mcstructure/bow.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "2176": {
    "id": "giveOperatorFirework",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Fogos de Artifício",
    "description": "Clique para baixar o arquivo de Fogos de Artifício de Operador!",
    "value": "mcstructure/firework.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1936": {
    "id": "giveOperatorShield",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Escudo de Operador",
    "description": "Clique para baixar o arquivo do incrível Escudo de Operador!",
    "value": "mcstructure/shield.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1960": {
    "id": "giveOperatorElytra",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Asas de Operador",
    "description": "Clique para baixar o arquivo das incríveis Asas de Operador!",
    "value": "mcstructure/elytra.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1044": {
    "id": "giveCamera",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Give Camera",
    "description": "Clique para baixar o arquivo do Item de Câmera.",
    "value": "mcstructure/camera.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1731": {
    "id": "giveNetherPortal",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Give Nether Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Nether.",
    "value": "mcstructure/nether_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1396": {
    "id": "giveEndPortal",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Give End Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do End.",
    "value": "mcstructure/end_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  },
  "1611": {
    "id": "giveEnderPortal",
    "enabled": true,
    "type": "file_download",
    "image": "https://sfwx.github.io/image/icon1.png",
    "title": "FwX404 · Minecraft",
    "subtitle": "Give Ender Portal",
    "description": "Clique para baixar o arquivo do Bloco de Portal do Ender.",
    "value": "mcstructure/ender_portal.mcstructure",
    "target": "_self",
    "confirm": {
      "enabled": true,
      "message": "Baixar Arquivo"
    }
  }
};
