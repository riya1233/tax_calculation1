document.getElementById("calculate-button").addEventListener("click", function() {
  var grossIncome = parseFloat(document.getElementById("gross-income").value);
  var extraIncome = parseFloat(document.getElementById("extra-income").value);
  var deductions = parseFloat(document.getElementById("deductions").value);
  var age = document.getElementById("age").value;

  if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
    document.getElementById("error-message").innerText = "Please enter valid numbers.";
    document.getElementById("tax-result").innerText = "";
    return;
  }

  var tax = calculateTax(grossIncome, extraIncome, deductions, age);
  document.getElementById("tax-result").innerText = "Tax: " + tax.toFixed(2) + " Lakhs";
  document.getElementById("error-message").innerText = "";
});

function calculateTax(grossIncome, extraIncome, deductions, age) {
  var totalIncome = grossIncome + extraIncome;
  totalIncome -= deductions;
  var taxRate = 0;
  switch (age) {
    case "under40":
      if (totalIncome <= 250000) {
        taxRate = 0;
      } else if (totalIncome <= 500000) {
        taxRate = 0.05;
      } else if (totalIncome <= 1000000) {
        taxRate = 0.1;
      } else {
        taxRate = 0.15;
      }
      break;
    case "between40and60":
      if (totalIncome <= 300000) {
        taxRate = 0;
      } else if (totalIncome <= 500000) {
        taxRate = 0.05;
      } else if (totalIncome <= 1000000) {
        taxRate = 0.1;
      } else {
        taxRate = 0.15;
      }
      break;
    case "over60":
      if (totalIncome <= 300000) {
        taxRate = 0;
      } else if (totalIncome <= 500000) {
        taxRate = 0.03;
      } else if (totalIncome <= 1000000) {
        taxRate = 0.08;
      } else {
        taxRate = 0.12;
      }
      break;
    default:
      taxRate = 0;
  }
  return totalIncome * taxRate;
}
