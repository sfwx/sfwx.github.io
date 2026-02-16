/*            FwX: MAIN             */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

console.log("FwX: Olá mundo!");

(function () {
  const path = window.location.pathname;

  // ignora index.html e páginas especiais
  if (path.endsWith(".html")) {
    const newPath = path.replace(/\.html$/, "");
    window.location.replace(newPath + window.location.search + window.location.hash);
  }
  document.querySelectorAll("*").forEach(element => {
    setTimeout(() => {
      element.setAttribute("data-fwx", "");
      element.setAttribute("data-origin", "https://sfwx.github.io");
      element.setAttribute("data-copyright", "https://sfwx.github.io/copyright");
    }, 100);
  });
})();

if (document.getElementById("fwxYear")) document.getElementById("fwxYear").innerHTML = new Date().getFullYear();

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
