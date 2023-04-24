function stampDuty(housePrice) {
  if (housePrice < 250001) {
    return "£0.00";
  } else if (housePrice < 925001) {
    const duty = (housePrice - 250000) * 0.05;
    return "£" + duty.toFixed(2);
  } else if (housePrice < 1500001) {
    const duty = (housePrice - 925000) * 0.1;
    return "£" + (duty + 33750.05).toFixed(2);
  }
}

module.exports = stampDuty;

// Up to £250,000	                                              0%
// The next £675,000 (the portion from £250,001 to £925,000)	  5%
// The next £575,000 (the portion from £925,001 to £1.5 million) 10%
// The remaining amount (the portion above £1.5 million)	     12%
