document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Ganti ikon 🌙 <-> ☀️
  if (document.body.classList.contains("dark")) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }
});

  const inputField = document.getElementById("inputField");
  const outputField = document.getElementById("outputField");
  const calcField = document.getElementById("calcField");
  const inputLabel = document.getElementById("inputLabel");
  const outputLabel = document.getElementById("outputLabel");
  const errorMessage = document.getElementById("errorMessage");
  const reverseCalcField = document.getElementById("reverseCalcField");

  const convertBtn = document.getElementById("convertBtn");
  const resetBtn = document.getElementById("resetBtn");
  const reverseBtn = document.getElementById("reverseBtn");

  let isCtoF = true; // status konversi

  convertBtn.addEventListener("click", () => {
  const inputVal = inputField.value.trim();
  clearError();

  if (inputVal === "") {
    showError("Input tidak boleh kosong.");
    return;
  }

  if (isNaN(inputVal)) {
    showError("Input harus berupa angka.");
    return;
  }

  const number = parseFloat(inputVal);
  let result = 0;
  let formula = "";
  let reverse = 0;
  let reverseFormula = "";

  if (isCtoF) {
    // Celsius ke Fahrenheit
    result = (number * 9 / 5) + 32;
    formula = `${number}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;

    // Kebalikannya: Fahrenheit ke Celsius
    reverse = (result - 32) * 5 / 9;
    reverseFormula = `(${result.toFixed(2)}°F - 32) × 5/9 = ${reverse.toFixed(2)}°C`;
  } else {
    // Fahrenheit ke Celsius
    result = (number - 32) * 5 / 9;
    formula = `(${number}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;

    // Kebalikannya: Celsius ke Fahrenheit
    reverse = (result * 9 / 5) + 32;
    reverseFormula = `${result.toFixed(2)}°C × (9/5) + 32 = ${reverse.toFixed(2)}°F`;
  }

  outputField.value = result.toFixed(2);
  calcField.value = formula;
  reverseCalcField.value = reverseFormula;
});

// Validasi form error

  function showError(message) {
  errorMessage.textContent = `⚠️ ${message}`;
  errorMessage.classList.add("active");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("active");
}

convertBtn.addEventListener("click", () => {
  const inputVal = inputField.value.trim();
  clearError();

  if (inputVal === "") {
    showError("Input tidak boleh kosong.");
    return;
  }

  if (isNaN(inputVal)) {
    showError("Input harus berupa angka.");
    return;
  }

  const number = parseFloat(inputVal);
  let result = 0;
  let formula = "";

  if (isCtoF) {
    result = (number * 9 / 5) + 32;
    formula = `${number}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
  } else {
    result = (number - 32) * 5 / 9;
    formula = `(${number}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
  }

  outputField.value = result.toFixed(2);
  calcField.value = formula;
});



  resetBtn.addEventListener("click", () => {
    inputField.value = "";
    outputField.value = "";
    calcField.value = "";
    //errorMessage.textContent = "";
      reverseCalcField.value = "";
  clearError();
  });

  reverseBtn.addEventListener("click", () => {
    // Tukar label
    if (isCtoF) {
      inputLabel.textContent = "Fahrenheit (°F):";
      outputLabel.textContent = "Celsius (°C):";
    } else {
      inputLabel.textContent = "Celsius (°C):";
      outputLabel.textContent = "Fahrenheit (°F):";
    }

    // Tukar isi input dan output (tanpa reset)
    const temp = inputField.value;
    inputField.value = outputField.value;
    outputField.value = temp;

    // Perbarui formula jika memungkinkan
    if (inputField.value && !isNaN(inputField.value)) {
      convertBtn.click(); // Re-konversi otomatis
    }

    isCtoF = !isCtoF;
  });
});
