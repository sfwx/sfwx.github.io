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
    if (type === "fwx" || type === "info" || type === "success" || type === "warn" || type === "error") return;
    if (type === "fwx") {
      console.error(`%c${text}`, "color: violet;");
    }
    else if (type === "success") {
      console.log(`%c${text}`, "color: lightgreen;");
    }
    else if (type === "warn") {
      console.warn(`%c${text}`, "color: palegoldenrod;");
    }
    else if (type === "error") {
      console.error(`%c${text}`, "color: lightcoral;");
    }
    else {
      console.log(`%c${text}`, "color: lightskyblue;");
    }
    const fwxConsole = document.getElementById("fwxConsole");
    if (fwxConsole) {
      const span = document.createElement("span");
      span.setAttribute("data-fwx", "");
      span.classList.add(type);
      span.textContent = (type === "fwx" : "FwX: ") + text + '\n';
      fwxConsole.appendChild(span);
      if (scroll) {
        document.querySelector("[data-fwx].console").scrollTop = document.querySelector("[data-fwx].console").scrollHeight;
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
      });
      resolve("sucesso");
    });
  }
};

fwx.extension(false);
fwx.log("fwx", "Olá mundo!");

window.addEventListener("load", () => {
  fwx.license.year();
  fwx.attributeData().then(res => {
    document.documentElement.classList.add("fwx");
  });
});

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
