// External JavaScript File: script.js

// Function to run the script when the window loads
window.onload = function() {
    // Prompt the user to enter the dollar amount of the service
    let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));

    // Function to verify a valid service amount between $5.00 and $500.00
    function isValidServiceAmount(amount) {
        return amount >= 5 && amount <= 500;
    }

    // Check if the service amount is valid
    if (!isValidServiceAmount(serviceAmount)) {
        alert("Invalid service amount entered. Please enter a value between $5.00 and $500.00.");
        return;
    }

    // Prompt the user to enter the service quality
    let serviceQuality = prompt("Enter the service quality (great, ok, or poor):").toLowerCase();

    // Function to verify a valid service quality was entered
    function isValidServiceQuality(quality) {
        return quality === "great" || quality === "ok" || quality === "poor";
    }

    // Check if the service quality is valid
    if (!isValidServiceQuality(serviceQuality)) {
        alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
        return;
    }

    // Function to calculate the tip amount
    function calculateTip(amount, quality) {
        let tipPercentage;
        switch (quality) {
            case "great":
                tipPercentage = 0.20;
                break;
            case "ok":
                tipPercentage = 0.15;
                break;
            case "poor":
                tipPercentage = 0.10;
                break;
        }
        return amount * tipPercentage;
    }

    // Calculate the tip amount
    let tipAmount = calculateTip(serviceAmount, serviceQuality);

    // Display the results to the user
    document.body.innerHTML = `For a service amount of $${serviceAmount.toFixed(2)}, the recommended tip is $${tipAmount.toFixed(2)} based on ${serviceQuality} service quality.`;
};
