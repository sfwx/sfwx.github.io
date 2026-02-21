/*        FwX: TAG-GENERATOR        */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

function tagFromName(name) {
  let sum = 0;
  name = name.toLowerCase();
  for (let c of name) sum += c.charCodeAt(0);
  return String(sum % 10000).padStart(4, "0");
}
function convertText(text) {
  if (!text) {
    document.getElementById("fwxResult").textContent = "#0000";
    history.replaceState(null, "", "#");
    return;
  }
  const tag = tagFromName(text);
  document.getElementById("fwxResult").textContent = "#" + tag;
  location.hash = tag;
  if (tag in fwx.actions) {
    document.getElementById("fwxResult").style.color = "lightCoral";
  }
  else {
    document.getElementById("fwxResult").removeAttribute("style");
  }
}
if (location.hash.length === 5) {
  document.getElementById("fwxResult").textContent = location.hash;
  if (location.hash.substring(1) in fwx.actions) {
    document.getElementById("fwxResult").style.color = "lightCoral";
  }
  else {
    document.getElementById("fwxResult").removeAttribute("style");
  }
}

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
