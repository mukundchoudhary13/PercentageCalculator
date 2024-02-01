// Function to take user input and calculate percentage change
function calculateAndDisplayPercentageChange() {
    let previousPrice = parseFloat(document.getElementById("previousPrice").value);
    let newPrice = parseFloat(document.getElementById("newPrice").value);

    if (isNaN(previousPrice) || isNaN(newPrice)) {
        alert("Please enter valid numbers for both prices.");
        return;
    }

    // Calculate percentage change based on absolute values
    let percentageChange = ((Math.abs(newPrice) - Math.abs(previousPrice)) / Math.abs(previousPrice)) * 100;

    // Display the result
    document.getElementById("result").innerText = "Percentage change: " + percentageChange.toFixed(2) + "%";
}
