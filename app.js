// app.js

const calc = require("./calculation");

// Given values
const ratePerHour = 300;
const hoursPerDay = 4;
const daysWorked = 6;

const taxRate = 0.10;
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

// Gross Income
const totalHours = calc.multiply(hoursPerDay, daysWorked);
const grossIncome = calc.multiply(ratePerHour, totalHours);

// Tax
const tax = calc.multiply(grossIncome, taxRate);

// Total Deductions
const deductions1 = calc.add(sss, pagIbig);
const deductions2 = calc.add(deductions1, philHealth);
const totalDeductions = calc.add(tax, deductions2);

// Net Salary
const netSalary = calc.subtract(grossIncome, totalDeductions);

// Display Results
console.log("The gross income is", grossIncome + ".");
console.log("Tax:", tax);
console.log("SSS:", sss);
console.log("Pag-Ibig fund:", pagIbig);
console.log("PhilHealth:", philHealth);
console.log("Total deductions:", totalDeductions);
console.log("The net salary is", netSalary + ".");

// Function demonstrations
console.log("\nFunction Outputs:");
console.log("add(5, 3) =", calc.add(5, 3));
console.log("subtract(10, 4) =", calc.subtract(10, 4));
console.log("multiply(6, 7) =", calc.multiply(6, 7));
console.log("divide(20, 5) =", calc.divide(20, 5));
