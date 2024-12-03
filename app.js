// Ambil elemen HTML
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll("[data-tip]");
const resetButton = document.getElementById("reset");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");

let tipPercentage = 0; // Persentase tip default

// Fungsi untuk menghitung dan memperbarui hasil
function calculate() {
  const bill = parseFloat(billInput.value) || 0; // Total tagihan
  const people = parseInt(peopleInput.value) || 1; // Jumlah orang

  // Hitung tip dan total
  const tipAmount = bill * (tipPercentage / 100); // Total tip
  const totalBill = bill + tipAmount; // Total bill dengan tip
  const tipPerPerson = tipAmount / people; // Tip per orang
  const totalPerPerson = totalBill / people; // Total per orang

  // Update elemen HTML
  tipAmountDisplay.innerText = `$${tipPerPerson.toFixed(2)}`;
  totalAmountDisplay.innerText = `$${totalPerPerson.toFixed(2)}`;
}

// Event listener untuk tombol tip
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const tipValue = e.target.getAttribute("data-tip");

    if (tipValue === "custom") {
      const customTip = prompt("Masukkan persentase tip (tanpa %):");
      tipPercentage = customTip ? parseFloat(customTip) : 0;
    } else {
      tipPercentage = parseFloat(tipValue);
    }

    calculate();
  });
});

// Event listener untuk tombol RESET
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  tipAmountDisplay.innerText = "$0.00";
  totalAmountDisplay.innerText = "$0.00";
  tipPercentage = 0;
});
