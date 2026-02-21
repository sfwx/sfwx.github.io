/*         FwX: BUILD-PAGES         */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

window.addEventListener("load", async function() {
  const template = document.getElementById("fwxTemplate");
  if (!template) {
    console.error("Erro: Elemento #template não encontrado.");
    return;
  }
  const zip = new JSZip();
  let script = null;
  let confirm = null;
  if (typeof fwx.actions !== "undefined") {
    for (const tag in fwx.actions) {
      if (fwx.actions[tag] && fwx.actions[tag].enabled) {
        if (fwx.actions[tag].type == "navigate" && fwx.actions[tag].target == "_self") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.location.href = "https://sfwx.github.io/` + fwx.actions[tag].value + `";`;
        }
        if (actions[tag].type == "external_link" && fwx.actions[tag].target == "_self") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.location.href = "` + fwx.actions[tag].value + `";`;
        }
        if (actions[tag].type == "external_link" && fwx.actions[tag].target == "_blank") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.open("` + fwx.actions[tag].value + `", "_blank");`;
        }
        if (actions[tag].type == "file_download" && fwx.actions[tag].target == "_self") {
          confirm =  `window.location.href = 'https://sfwx.github.io/` + fwx.actions[tag].value + `';`;
          script = `document.getElementById("fwxButton").style.display = "block";`;
        }
        if (fwx.actions[tag].type == "download_redirect" && fwx.actions[tag].target == "_self") {
          confirm =  `window.location.href = '` + fwx.actions[tag].value + `';`;
          script = `document.getElementById("fwxButton").style.display = "block";`;
        }
        try {
          let content = template.value
            .replaceAll("{{FWX.VALUE}}", fwx.actions[tag].value)
            .replaceAll("{{FWX.META.COLOR}}", fwx.actions[tag].meta?.color)
            .replaceAll("{{FWX.META.TITLE}}", fwx.actions[tag].meta?.title)
            .replaceAll("{{FWX.META.DESCRIPTION}}", fwx.actions[tag].meta?.description)
            .replaceAll("{{FWX.META.IMAGE.ICON}}", fwx.actions[tag].meta?.image?.icon)
            .replaceAll("{{FWX.META.IMAGE.THUMBNAIL}}", fwx.actions[tag].meta?.image?.thumbnail)
            .replaceAll("{{FWX.META.IMAGE.SIZE}}", fwx.actions[tag].meta?.image?.size)
            .replaceAll("{{FWX.IMAGE}}", fwx.actions[tag].image)
            .replaceAll("{{FWX.TITLE}}", fwx.actions[tag].title)
            .replaceAll("{{FWX.SUBTITLE}}", fwx.actions[tag].subtitle)
            .replaceAll("{{FWX.DESCRIPTION}}", fwx.actions[tag].description)
            .replaceAll("{{FWX.CONFIRM.MESSAGE}}", fwx.actions[tag].confirm?.message)
            .replaceAll("{{FWX.CONFIRM.SCRIPT}}", confirm)
            .replaceAll("{{FWX.SCRIPT}}", script);
          zip.file(tag + '.html', content);
        }
        catch (e) {
          console.warn(`Erro ao processar a tag ${tag}:`, e);
        }
      }
    }
    try {
      const blob = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "sfwx.github.io.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
      location.replace("https://github.com/sfwx/sfwx.github.io/upload");
    }
    catch (err) {
      console.error("Erro ao gerar o arquivo ZIP:", err);
    }
  }
  else {
    alert("Erro: O objeto 'fwx.actions' não foi encontrado. Verifique se o script actions.js carregou.");
  }
});

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
