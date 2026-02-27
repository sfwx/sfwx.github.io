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
        console.log(`%c  %c FwX: ${text}`, "background: violet; border-radius: 50%;", "color: violet;");
        break;
      case "info":
        console.log(`%c  %c Info: ${text}`, "background: lightskyblue; border-radius: 50%;", "color: lightskyblue;");
        break;
      case "success":
        console.log(`%c  %c Success: ${text}`, "background: lightgreen; border-radius: 50%;", "color: lightgreen;");
        break;
      case "warn":
        console.warn('Warn:', text);
        break;
      case "error":
        console.error(text);
        break;
      default:
        return;
        break;
    }
    const fwxConsole = document.getElementById("fwxConsole");
    if (fwxConsole) {
      const span = document.createElement("span");
      span.setAttribute("data-fwx", "");
      span.classList.add(type);
      span.textContent = (type === "fwx" ? "FwX: " : "") + text + '\n';
      fwxConsole.appendChild(span);
      const fwxConsoleDiv = document.querySelector("[data-fwx].console");
      if (fwxConsoleDiv && scroll) {
        fwxConsoleDiv.scrollTop = fwxConsoleDiv.scrollHeight;
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
