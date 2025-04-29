// 1. Define Variables for Coins
let pennies = 123;
let nickels = 87;
let dimes = 142;
let quarters = 59;

// 2. Function to Calculate Total Value of Coins
function calculateTotalValue() {
let totalPennies = pennies * 0.01;
let totalNickels = nickels * 0.05;
let totalDimes = dimes * 0.10;
let totalQuarters = quarters * 0.25;
let totalValue = totalPennies + totalNickels + totalDimes + totalQuarters;

console.log("Total Value of Coins: $", totalValue.toFixed(2));
}


// 3. Sort Coins into Wrappers
function sortCoins() {
    let pennyWrappers = Math.floor(pennies / 50);
    let remainingPennies = pennies % 50;
    let nickelWrappers = Math.floor(nickels / 40);
    let remainingNickels = nickels % 40;
    let dimeWrappers = Math.floor(dimes / 50);
    let remainingDimes = dimes % 50;
    let quarterWrappers = Math.floor(quarters / 40);
    let remainingQuarters = quarters % 40;

//4. Output the Results
    console.log("Penny Wrappers needed:", pennyWrappers, "Remaining Pennies:", remainingPennies);
    console.log("Nickel Wrappers needed:", nickelWrappers, "Remaining Nickels:", remainingNickels);
    console.log("Dime Wrappers needed:", dimeWrappers, "Remaining Dimes:", remainingDimes);
    console.log("Quarter Wrappers needed:", quarterWrappers, "Remaining Quarters:", remainingQuarters);
}
//5. Call the Functions
calculateTotalValue();
sortCoins();
        
         

