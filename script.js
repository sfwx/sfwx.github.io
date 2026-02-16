// ===== INPUT =====
function fwxInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.href = /^\d+$/.test(input.value) ? input.value.padStart(4, '0') : input.value;
    input.value = "";
  }
}

// ===== EVENTS =====
window.addEventListener("load", {
  window.location.href = window.location.hash.substring(1).toLowerCase().padStart(4, '0')
});
