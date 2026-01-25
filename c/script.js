document.getElementById("year").textContent = new Date().getFullYear();
function tagFromName(name) {
  let sum = 0;
  name = name.toLowerCase();
  for (let c of name) sum += c.charCodeAt(0);
  return String(sum % 10000).padStart(4, "0");
}
function convertText(text) {
  if (!text) {
    document.getElementById("result").textContent = "#0000";
    history.replaceState(null, "", "#");
    return;
  }
  const tag = tagFromName(text);
  document.getElementById("result").textContent = "#" + tag;
  location.hash = tag;
  if (tag in actions) {
    document.getElementById("result").style.color = "lightCoral";
  }
  else {
    document.getElementById("result").style.color.remove();
  }
}
if (location.hash.length === 5) {
  document.getElementById("result").textContent = location.hash;
  if (location.hash.substring(1) in actions) {
    document.getElementById("result").style.color = "lightCoral";
  }
  else {
    document.getElementById("result").style.color.remove();
  }
}
