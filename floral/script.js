const ELEMENTS = {
    input: document.getElementById('fwxFileInput'),
    canvas: document.getElementById('fwxCanvas'),
    previewImg: document.getElementById('fwxPreview'),
    skinPreview: document.getElementById('fwxSkinPreview'),
    capePreview: document.getElementById('fwxCapePreview'),
    console: document.getElementById('fwxConsole'),
    saveButton: document.getElementById('fwxSaveButton'),
};

// Estado da aplicação
const STATE = {
    skin: null, // Image Object
    cape: null, // Image Object
    skinFile: null,
    capeFile: null,
    overlayUrl: "https://sfwx.github.io/floral/64/signature.png" // URL da marca d'agua/overlay
};

// --- Utilitários de Log ---
function log(msg, type = 'info') {
    const color = type === 'error' ? '#ff5555' : (type === 'success' ? '#55ff55' : '#ffffff');
    ELEMENTS.console.innerHTML += `<br>
<span style="color: ${color};">> ${msg}</span>`;
    console.log(`[FloralCape] ${msg}`);
}

// --- Carregamento de Imagens ---
const loadImage = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Importante para canvas manipulation
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src; // Aceita URL ou Base64
});

const readFileAsDataURL = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
});

const readFileAsText = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
});

// --- Manipulação Principal ---

async function fwxHandleUpload() {
    const files = ELEMENTS.input.files;
    if (!files.length) return;

    log("Analisando arquivos...");

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type === "application/json") {
            fwxUpdateJson(file);
            continue;
        }

        if (file.type.startsWith("image/")) {
            try {
                const dataUrl = await readFileAsDataURL(file);
                const img = await loadImage(dataUrl);
                
                const ratio = img.width / img.height;

                // Lógica de detecção baseada em Dimensão e Aspect Ratio
                // Skin: 1:1 (64x64 ou 128x128)
                if (ratio === 1) {
                    STATE.skin = img;
                    STATE.skinFile = file;
                    ELEMENTS.skinPreview.style.backgroundImage = `url('${dataUrl}')`;
                    log("Skin detectada e carregada.", "success");
                } 
                // Capa: 2:1 (64x32 ou 128x64)
                else if (ratio === 2) {
                    STATE.cape = img;
                    STATE.capeFile = file;
                    ELEMENTS.capePreview.style.backgroundImage = `url('${dataUrl}')`;
                    log("Capa detectada e carregada.", "success");
                } else {
                    log(`Formato de imagem desconhecido: ${img.width}x${img.height}`, "error");
                }

            } catch (error) {
                log("Erro ao ler imagem.", "error");
                console.error(error);
            }
        }
    }

    // Habilita o botão salvar se tiver pelo menos a skin
    if (STATE.skin) {
        ELEMENTS.saveButton.disabled = false;
    }
}

async function fwxCreateSkin() {
    if (!STATE.skin) {
        log("Nenhuma skin carregada para processar.", "error");
        return;
    }

    log("Gerando FloralCape Skin...");
    
    const ctx = ELEMENTS.canvas.getContext('2d');
    
    // Define tamanho base (prioriza 64px por enquanto, mas preparado para lógica 128)
    const size = 64; 
    ELEMENTS.canvas.width = size;
    ELEMENTS.canvas.height = size;

    ctx.clearRect(0, 0, size, size);
    
    // 1. Desenha a Skin do Jogador
    // Garante que desenhe no tamanho 64x64 mesmo se a fonte for 128x128 (downscale) ou mantém 128 se mudar a const size
    ctx.drawImage(STATE.skin, 0, 0, size, size);

    // 2. Carrega e Desenha a Assinatura/Overlay (Se necessário)
    // Nota: O script original tentava baixar 'cape.png' e 'signature.png'.
    // Vou assumir que existe uma textura base 'template' que deve ser aplicada.
    try {
        // Tenta carregar o overlay do servidor
        // Se quiser usar o 'cape.png' original como base, mude a URL em STATE.overlayUrl
        const overlayImg = await loadImage(STATE.overlayUrl);
        ctx.drawImage(overlayImg, 0, 0, size, size);
    } catch (e) {
        console.warn("Não foi possível carregar o overlay do servidor. Prosseguindo sem ele.");
    }

    // 3. Aplica a Lógica da Capa (FloralCape Mapping)
    // Mapeia partes da capa (64x32) para a coluna extra da skin (x=56)
    if (STATE.cape) {
        // As coordenadas foram baseadas no seu script original comentado
        /*
          Lógica Interpretada:
          Destino X = 56 (Coluna reservada)
          Destino Y = 0 (Topo), 16 (Meio), 32 (Baixo)
        */
        
        // Exemplo de mapeamento (ajuste conforme a necessidade exata da geometria):
        
        // Parte 1 da Capa (Frente?) -> Copia x=1, y=1, w=5, h=16 da capa -> Cola em 56, 16 na skin
        ctx.drawImage(STATE.cape, 1, 1, 5, 16, 56, 16, 5, 16);
        
        // Parte 2 da Capa (Costas?) -> Copia x=6, y=1, w=5, h=16 da capa -> Cola em 56, 32 na skin
        ctx.drawImage(STATE.cape, 6, 1, 5, 16, 56, 32, 5, 16);
        
        // Parte 3 (Opcional - Topo/Cabeça da capa?) -> Cola em 56, 0
        // ctx.drawImage(STATE.skin, 8, 8, 8, 8, 56, 0, 8, 8); // Exemplo antigo, copiava parte da skin
        
        log("Capa aplicada à textura.", "success");
    }

    // Atualiza preview final (invisível na UI mas útil para debug)
    ELEMENTS.previewImg.src = ELEMENTS.canvas.toDataURL();
    
    // Inicia Download
    downloadCanvasAsImage();
}

function downloadCanvasAsImage() {
    const link = document.createElement('a');
    // Nome do arquivo baseado na skin original ou padrão
    const originalName = STATE.skinFile ? STATE.skinFile.name.replace(/\.[^/.]+$/, "") : "floral_skin";
    link.download = `${originalName}_floral.png`;
    link.href = ELEMENTS.canvas.toDataURL("image/png");
    link.click();
    log("Download iniciado!", "success");
}

// --- Manipulação de JSON ---

async function fwxUpdateJson(file) {
    try {
        const text = await readFileAsText(file);
        let json = JSON.parse(text);

        // Validação básica
        if (!json["minecraft:client_entity"] || !json["minecraft:client_entity"].description) {
            throw new Error("JSON inválido: Estrutura 'minecraft:client_entity' não encontrada.");
        }

        const desc = json["minecraft:client_entity"].description;

        // Garante objetos e arrays
        desc.geometry = desc.geometry || {};
        desc.animations = desc.animations || {};
        desc.render_controllers = desc.render_controllers || [];

        // Aplica as configurações do FloralCape
        desc.geometry.floralCape = "geometry.flownix.cape";
        desc.geometry.eyes = "geometry.player.eyes"; // Mantido do original
        
        desc.animations.cape = "animation.player.cape";

        // Adiciona Render Controllers se não existirem
        const rcCape = "controller.render.player.floralCape";
        const rcEyes = "controller.render.player.eyes";
        const condition = "(!variable.is_first_person || query.is_in_ui || variable.is_paperdoll) && !query.is_spectator && !variable.map_face_icon";

        // Remove duplicatas antigas para evitar array gigante
        desc.render_controllers = desc.render_controllers.filter(rc => {
            if (typeof rc === 'string') return rc !== rcCape && rc !== rcEyes;
            if (typeof rc === 'object') return !rc[rcCape] && !rc[rcEyes];
            return true;
        });

        // Adiciona os novos
        desc.render_controllers.push({ [rcCape]: condition });
        desc.render_controllers.push({ [rcEyes]: condition });

        // Cria o arquivo para download
        const blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = file.name; // Mantém o mesmo nome
        link.click();
        
        log(`JSON atualizado: ${file.name}`, "success");

    } catch (error) {
        log(`Erro no JSON: ${error.message}`, "error");
    }
}

// Função helper para o botão de "Update Json" caso clique direto sem arquivo
function triggerJsonUpload() {
    // Apenas clica no input, o handler cuida do resto
    ELEMENTS.input.click(); 
          }
