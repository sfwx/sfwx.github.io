// fwx-skin-pack-generator v0.5.1

fwx.log("info", "Pronto para execução.");

document.getElementById("fwxFile").addEventListener("change", handleFWX);

async function handleFWX(event) {
    const file = event.target.files[0];
    if (!file) {
        fwx.log("error", "Nenhum arquivo selecionado.");
        return;
    }

    fwx.log("info", "Analisando arquivo de pacote ZIP..");

    try {
        const zip = await JSZip.loadAsync(file);
        const contentsFile = zip.file("contents.json");

        if (!contentsFile) {
            fwx.log("error", "\"contents.json\" não foi encontrado.");
            return;
        }

        const contents = JSON.parse(await contentsFile.async("string"));
        const newZip = new JSZip();

        const metadata = {
            metadata: {
                author: ["FlowniX"],
                license: "All Rights Reserved",
                generated_with: {
                    "fwx-skin-pack-generator": [0, 5, 1]
                },
                url: "https://sfwx.github.io/0852"
            }
        };

        const skinSlots = [];
        const langEntries = [];
        const capeFiles = [];
        const styleEntries = [];
        const baseSkins = {};

        // ==================================================
        // PRIMEIRA PASSADA
        // ==================================================

        for (const entry of contents.content) {

            const fileObj = zip.file(entry.path);
            if (!fileObj) continue;

            const fileName = entry.path.split("/").pop();

            switch (entry.type) {

                case "IMAGE_PNG_ICON":
                    newZip.file("pack_icon.png", await fileObj.async("blob"));
                    break;

                case "TEXTURE_CAPE":

                    const capeBlob = await fileObj.async("blob");

                    capeFiles.push({
                        name: fileName.replace(".png", ""),
                        fileName: fileName,
                        blob: capeBlob
                    });

                    // ✅ AGORA COPIA PARA O NOVO ZIP
                    newZip.file(fileName, capeBlob);

                    break;

                case "SKIN_BASE_WIDE":
                case "SKIN_BASE_SLIM":
                case "SKIN_SIGNATURE":
                    baseSkins[entry.type] = await fileObj.async("blob");
                    break;

                case "STYLE_WIDE_64":
                case "STYLE_WIDE_128":
                case "STYLE_SLIM_64":
                case "STYLE_SLIM_128":
                    styleEntries.push(entry);
                    break;

                case "COPYRIGHT":
                case "APPLICATION":
                case "SKIN_DUMMY_WIDE":
                case "SKIN_DUMMY_SLIM":
                case "SKIN_WIDE_64":
                case "SKIN_SLIM_64":
                case "SKIN_WIDE_128":
                case "SKIN_SLIM_128":
                    newZip.file(fileName, await fileObj.async("blob"));
                    break;
            }
        }

        // ==================================================
        // SKINS FIXAS
        // ==================================================

        fwx.log("info", "Adicionando skins fixas ao pacote..\n<table data-fwx><tbody data-fwx>");
        for (const entry of contents.content) {

            if (
                entry.type.startsWith("SKIN_") &&
                !entry.type.includes("SIGNATURE") &&
                !entry.type.includes("BASE") &&
                !entry.type.includes("DUMMY")
            ) {

                const name = entry.path.split("/").pop().replace(".png", "");
                const isWide = entry.type.includes("WIDE");

                for (const cape of capeFiles) {

                    skinSlots.push({
                        localization_name: `${name}.${cape.name}`,
                        geometry: isWide
                            ? "geometry.humanoid.custom"
                            : "geometry.humanoid.customSlim",
                        texture: name + ".png",
                        type: "free",
                        cape: cape.fileName
                    });

                    langEntries.push({
                        key: `${name}.${cape.name}`,
                        value: `${removeFWX(name)} | ${cape.name}`
                    });
                    // fwx.log("success", ` > ${name} - ${cape.name}`);
                    fwx.log("info", `<tr>${name}</tr><tr>${cape.name}</tr>`);
                }
            }
        }

        // ==================================================
        // GERAR SKINS DINÂMICAS
        // ==================================================

        fwx.log("info", "</tbody</table>\nGerando skins dinâmicas..\n<table data-fwx><tbody data-fwx>");
        for (const style of styleEntries) {

            const styleBlob = await zip.file(style.path).async("blob");
            const styleName = style.path.split("/").pop().replace(".png", "");

            const isWide = style.type.includes("WIDE");
            const size = style.type.includes("128") ? 128 : 64;

            const baseKey = isWide ? "SKIN_BASE_WIDE" : "SKIN_BASE_SLIM";

            const baseBlob = baseSkins[baseKey];
            const signatureBlob = baseSkins["SKIN_SIGNATURE"];

            if (!baseBlob || !signatureBlob) {
                fwx.log("warn", "Base ou assinatura não encontrada.");
                continue;
            }

            const finalSkinBlob = await mergeSkinLayers(
                baseBlob,
                styleBlob,
                signatureBlob,
                size
            );

            newZip.file(styleName + ".png", finalSkinBlob);

            // Criar slot para cada capa
            for (const cape of capeFiles) {

                skinSlots.push({
                    localization_name: `${styleName}.${cape.name}`,
                    geometry: isWide
                        ? "geometry.humanoid.custom"
                        : "geometry.humanoid.customSlim",
                    texture: styleName + ".png",
                    type: "free",
                    cape: cape.fileName
                });

                langEntries.push({
                    key: `${styleName}.${cape.name}`,
                    value: `${removeFWX(styleName)} | ${cape.name}`
                });
                //fwx.log("success", ` > ${styleName} - ${cape.name}`);
                fwx.log("info", `<tr>${stylename}</tr><tr>${cape.name}</tr>`);
            }
        }        
        fwx.log("info", "</tbody></table>\nAdicionando skins dinâmicas ao pacote..");
        // ==================================================
        // GERAR skins.json
        // ==================================================
        fwx.log("info", "Adicionando skins.json ao pacote..");
        const skinsJSON = {
            ...metadata,
            localization_name: "FlowniX",
            serialize_name: "FlowniX",
            skins: skinSlots
        };

        newZip.file("skins.json", JSON.stringify(skinsJSON, null, 2));

        // ==================================================
        // GERAR LANG
        // ==================================================

        fwx.log("info", "Gerando \"lang/en_US.lang\" para as skins..");
        let langText = "skinpack.FlowniX=FlowniX: Skin Capes\n";

        for (const entry of langEntries) {
            langText += `skin.${entry.key}=${entry.value}\n`;
        }

        newZip.folder("texts").file("en_US.lang", langText);

        // ==================================================
        // GERAR MANIFEST
        // ==================================================

        fwx.log("info", "Adicionando manifest.json ao pacote..");
        const manifest = {
            ...metadata,
            format_version: 2,
            header: {
                name: "FlowniX",
                uuid: generateUUID(),
                version: [4, 0, 4]
            },
            modules: [{
                type: "skin_pack",
                uuid: generateUUID(),
                version: [4, 0, 4]
            }]
        };

        newZip.file("manifest.json", JSON.stringify(manifest, null, 2));

        // ==================================================
        // EXPORTAR
        // ==================================================

        fwx.log("success", "Pacote fwx.mcpack gerado com sucesso.");
        fwx.log("info", "Solicitando download pelo navegador..");
        const blob = await newZip.generateAsync({ type: "blob" });
        downloadBlob(blob, "fwx.mcpack");


    } catch (err) {
        console.error(err);
        fwx.log("error", "Erro ao gerar pacote.");
    }
}

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

function removeFWX(name) {
    return name.replace(/^fwx/i, "");
}

function generateUUID() {
    return crypto.randomUUID();
}

function downloadBlob(blob, filename) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

async function mergeSkinLayers(base, style, signature, size) {

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");

    const baseImg = await createImageBitmap(base);
    const styleImg = await createImageBitmap(style);
    const signImg = await createImageBitmap(signature);

    ctx.drawImage(baseImg, 0, 0, size, size);
    ctx.drawImage(styleImg, 0, 0, size, size);
    ctx.drawImage(signImg, 0, 0, size, size);

    return new Promise(resolve => {
        canvas.toBlob(resolve, "image/png");
    });
}