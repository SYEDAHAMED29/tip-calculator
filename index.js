const billValue = document.getElementById("bill");
const peopleCount = document.getElementById("total-people");
const allButtons = document.querySelectorAll(".btn");

const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-per-person");
const resetBtn = document.getElementById("resetBtn");
const hidden = document.querySelector(".hidden");

const customBtn = document.getElementById("custom-tip");

customBtn.addEventListener("change", () => {
   let customValue = customBtn.value;
   console.log(customValue);
   if (peopleCount.value == "" || peopleCount.value < 0) {
      hidden.style.display = "block";
      peopleCount.style.border = "1px solid red";
   } else {
      hidden.style.display = "none";
      peopleCount.style.border = "1px solid black";
      let billInput = billValue.value;
      let peopleInput = peopleCount.value;
      let tipPercent = customValue / 100;

      let totalTip = billInput * tipPercent;
      tipPerPerson.textContent = "$" + (totalTip / peopleInput).toFixed(2);

      let totalAmount = Number(billInput) + Number(totalTip);
      totalPerPerson.textContent = "$" + (totalAmount / peopleInput).toFixed(2);
   }
});

allButtons.forEach((btn) => {
   btn.addEventListener("click", () => {
      if (peopleCount.value == "" || peopleCount.value < 0) {
         hidden.style.display = "block";
         peopleCount.style.border = "1px solid red";
      } else {
         hidden.style.display = "none";
         peopleCount.style.border = "1px solid black";
         let billInput = billValue.value;
         let peopleInput = peopleCount.value;
         let tipPercent = btn.value / 100;

         let totalTip = billInput * tipPercent;
         tipPerPerson.textContent = "$" + (totalTip / peopleInput).toFixed(2);

         let totalAmount = Number(billInput) + Number(totalTip);
         totalPerPerson.textContent = "$" + (totalAmount / peopleInput).toFixed(2);
      }
   });
});

resetBtn.addEventListener("click", () => {
   tipPerPerson.textContent = "$0.00";
   totalPerPerson.textContent = "$0.00";
   billValue.value = "";
   peopleCount.value = "";
   customBtn.value = "Custom";
});
