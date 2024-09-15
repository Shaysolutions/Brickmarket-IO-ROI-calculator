function calculateROI() {
    const investment = document.getElementById('investment').value;
    const investors = document.getElementById('investors').value;
    const returnRate = document.getElementById('returnRate').value;
    
    // Assume unit price is 6,000,000 EGP and future value is 7,500,000 EGP
    const unitPrice = 6000000;
    const futurePrice = 7500000;
    
    // Calculate individual's share of the unit price
    const share = unitPrice / investors;
    
    // Calculate ROI based on return rate
    const profit = (futurePrice / unitPrice - 1) * investment * (returnRate / 100);
    
    // Display result
    document.getElementById('result').innerHTML = `Your estimated profit: ${profit.toFixed(2)} EGP`;
}
