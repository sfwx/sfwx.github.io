window.addEventListener("load", async function() {
  const template = document.getElementById("fwxTemplate");
  if (!template) {
    console.error("Erro: Elemento #template não encontrado.");
    return;
  }
  const zip = new JSZip();
  let script = null;
  let confirm= null;
  if (typeof actions !== "undefined") {
    for (const tag in actions) {
      if (actions[tag] && actions[tag].enabled) {
        if (actions[tag].type == "navigate" && actions[tag].target == "_self") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.location.href = "https://sfwx.github.io/` + actions[tag].value + `";`;
        }
        if (actions[tag].type == "external_link" && actions[tag].target == "_self") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.location.href = "` + actions[tag].value + `";`;
        }
        if (actions[tag].type == "external_link" && actions[tag].target == "_blank") {
          confirm = null;
          script = `document.getElementById("fwxButton").style.display = "block";
        window.open("` + actions[tag].value + `", "_blank");`;
        }
        if (actions[tag].type == "file_download" && actions[tag].target == "_self") {
          confirm =  `window.location.href = 'https://sfwx.github.io/` + actions[tag].value + `';`;
          script = `document.getElementById("fwxButton").style.display = "block";`;
        }
        if (actions[tag].type == "download_redirect" && actions[tag].target == "_self") {
          confirm =  `window.location.href = '` + actions[tag].value + `';`;
          script = `document.getElementById("fwxButton").style.display = "block";`;
        }
        try {
          let content = template.value
            .replaceAll("{{FWX.VALUE}}", actions[tag].value)
            .replaceAll("{{FWX.COLOR}}", actions[tag].color)
            .replaceAll("{{FWX.META.IMAGE.VALUE}}", actions[tag].meta?.image?.value)
            .replaceAll("{{FWX.META.IMAGE.SIZE}}", actions[tag].meta?.image?.size)
            .replaceAll("{{FWX.META.TITLE}}", actions[tag].meta?.title)
            .replaceAll("{{FWX.META.DESCRIPTION}}", actions[tag].meta?.description)
            .replaceAll("{{FWX.IMAGE}}", actions[tag].image)
            .replaceAll("{{FWX.TITLE}}", actions[tag].title)
            .replaceAll("{{FWX.SUBTITLE}}", actions[tag].subtitle)
            .replaceAll("{{FWX.DESCRIPTION}}", actions[tag].description)
            .replaceAll("{{FWX.CONFIRM.MESSAGE}}", actions[tag].confirm?.message)
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
      window.close();
    }
    catch (err) {
      console.error("Erro ao gerar o arquivo ZIP:", err);
    }
  }
  else {
    alert("Erro: O objeto 'actions' não foi encontrado. Verifique se o script actions.js carregou.");
  }
});
