/*            FwX: INDEX            */
/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */

const fwx.hash = window.location.hash.substring(1);
if (fwx.hash) {
  if (/^\d+$/.test(fwx.hash)) {
    const corrected = fwx.hash.padStart(4, "0");
    window.location.href = corrected;
  }
}

function fwxInput(event, input) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    window.location.href = /^\d+$/.test(input.value) ? input.value.padStart(4, "0") : input.value;
    input.value = "";
  }
}

/* Todos os direitos são reservados */
/* https://sfwx.github.io/copyright */
