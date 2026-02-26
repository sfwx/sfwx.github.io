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
  log(type, text, popup = false, scroll = true) {
    switch (type) {
      case "fwx":
        console.log("violet", "FwX:", text);
        break;
      case "info":
        console.log("lightskyblue", "INFO:", text);
        break;
      case "success":
        console.success("lightgreen", "SUCESSO:", text);
        break;
      case "warn":
        console.warn("palegoldenrod", "AVISO:", text);
        break;
      case "error":
        console.error("lightcoral", "ERRO:", text);
        break;
    }
    if (document.getElementById("fwxConsole")) {
      fwxConsole = document.getElementById("fwxConsole");
      fwxSpan = document.createElement("span");
      switch (type) {
        case "fwx":
          fwxSpan.classList.add("fwx");
          fwxSpan.textContent = ("violet", "FwX:", text);
          break;
        case "info":
          fwxSpan.classList.add("info");
          fwxSpan.textContent = ("lightskyblue", "INFO:", text);
          break;
        case "success":
          fwxSpan.classList.add("success");
          fwxSpan.textContent = ("lightgreen", "SUCESSO:", text);
          break;
        case "warn":
          fwxSpan.classList.add("warn");
          fwxSpan.textContent = ("palegoldenrod", "AVISO:", text);
          break;
        case "error":
          fwxSpan.classList.add("error");
          fwxSpan.textContent = ("lightcoral", "ERRO:", text);
          break;
      }
    }
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

fwx.extension(true);
fwx.log("fwx", "Olá mundo!");

window.addEventListener("load", () => {
  fwx.license.year();
  fwx.attributeData().then(res => {
    document.documentElement.classList.add("fwx");
  });
});

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
