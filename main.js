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
    }, 100);
  });
})();

if (document.getElementById("fwxYear")) document.getElementById("fwxYear").innerHTML = new Date().getFullYear();
