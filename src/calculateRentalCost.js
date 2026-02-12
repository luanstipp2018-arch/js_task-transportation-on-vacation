/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  let total = days * dailyPrice;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }
}

module.exports = calculateRentalCost;
