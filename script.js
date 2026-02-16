window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const value = hash.substring(1);
    if (/^\d+$/.test(value)) {
      const corrected = value.padStart(4, "0");
      window.location.href = corrected;
    }
  }
});
function fwxInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.href = /^\d+$/.test(input.value) ? input.value.padStart(4, "0") : input.value;
    input.value = "";
  }
}
