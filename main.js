console.log("FwX: Olá mundo!");

(function () {
  const path = window.location.pathname;

  // ignora index.html e páginas especiais
  if (
    path.endsWith(".html") &&
    path !== "/index.html" &&
    !path.endsWith("/404.html")
  ) {
    const newPath = path.replace(/\.html$/, "");
    window.location.replace(newPath + window.location.search + window.location.hash);
  }
  document.querySelectorAll("*").forEach(element => {
    element.classList.add = "fwx";
  });
})();

if (document.getElementById("fwxYear")) document.getElementById("fwxYear").innerHTML = new Date().getFullYear();