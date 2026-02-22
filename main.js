/*            FwX: MAIN             */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

window.fwx = {
  version: "4.0.4",
  license: {
    text: [
      "© 2026 FlowniX. Conteúdo Protegido.",
      "Direitos Autorais & Termos"
    ],
    url: "https://sfwx.github.io/copyright",
    year() {
      if (document.getElementById("fwxCopyrightYear")) {
        document.getElementById("fwxCopyrightYear").innerHTML = new Date().getFullYear();
      }
    }
  },
  log(type, text, popup = false, sholl = true) {
    // Preparação para o futuro;
    console.log("FwX:", text);
    if (popup) alert(text);
  },
  extension(active = false) {
    if (!active) {
      const path = window.location.pathname;
      if (path.endsWith("/index.html")) {
        const newPath = path.replace(/\/index.html$/, "/");
        window.location.replace(newPath + window.location.search + window.location.hash);
      }
      else if (path.endsWith(".html")) {
        const newPath = path.replace(/\.html$/, "");
        window.location.replace(newPath + window.location.search + window.location.hash);
      }
      else if (path.endsWith("/index")) {
        const newPath = path.replace(/\/index$/, "/");
        window.location.replace(newPath + window.location.search + window.location.hash);
      }
    }
  },
  attributeData() {
    return new Promise(resolve => {
      document.querySelectorAll("*:not([data-fwx])").forEach(element => {
        element.setAttribute("data-fwx", "");
        element.setAttribute("data-origin", "https://sfwx.github.io");
        element.setAttribute("data-copyright", "https://sfwx.github.io/copyright");
      });
      resolve("sucesso");
    });
  }
};

fwx.extension(false);
fwx.log("fwx", "Olá mundo!");

window.addEventListener("load", () => {
  fwx.license.year();
  /*fwx.attributeData().then(res => {
    document.html.classList.add("fwx");
  });*/
});

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
