/*            FwX: MAIN             */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

window.fwx = {
  version: "4.0.4",
  license: {
    text: "© FlowniX. Todos os Direitos são Reservados.",
    url: "https://sfwx.github.io/copyright",
    year() {
      if (document.getElementById("fwxCopyrightYear")) {
        document.getElementById("fwxCopyrightYear").innerHTML = new Date().getFullYear();
      }
    }
  },
  log(text) {
    console.log("FwX:", text);
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
    document.querySelectorAll("*:not([data-fwx])").forEach(element => {
      setTimeout(() => {
        element.setAttribute("data-fwx", "");
        element.setAttribute("data-origin", "https://sfwx.github.io");
        element.setAttribute("data-copyright", "https://sfwx.github.io/copyright");
      }, 100);
    })
  }
};

fwx.extension(false);
fwx.log("Olá mundo!");

(function () {
  fwx.year();
  fwx.attributeData();
})();

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
