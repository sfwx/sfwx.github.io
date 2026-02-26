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
    const types = {
      fwx: { label: "FwX: ", color: "violet" },
      info: { label: "", color: "lightskyblue" },
      success: { label: "", color: "lightgreen" },
      warn: { label: "", color: "palegoldenrod" },
      error: { label: "", color: "lightcoral" }
    };
    if (!types[type] || !text) return;
    const { label, color } = types[type];
    if (type === "warn") {
      console.warn(`%c${label}${text}`, `color: ${color};`);
    } else if (type === "error") {
      console.error(`%c${label}${text}`, `color: ${color};`);
    } else {
      console.log(`%c${label}${text}`, `color: ${color};`);
    }
    // Console customizado na página
    const fwxConsole = document.getElementById("fwxConsole");
    if (fwxConsole) {
      const span = document.createElement("span");
      span.setAttribute("data-fwx", "");
      span.classList.add(type);
      span.textContent = `${label}${text}\n`;
      fwxConsole.appendChild(span);
      if (scroll) {
        document.querySelector("[data-fwx].console").scrollTop = fwxConsole.scrollHeight;
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
