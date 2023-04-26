function stampDuty(housePrice) {
  if (housePrice < 250001) {
    return "£0.00";
  } 
}

module.exports = stampDuty;

// Up to £250,000	                                              0%
// The next £675,000 (the portion from £250,001 to £925,000)	  5%
// The next £575,000 (the portion from £925,001 to £1.5 million) 10%
// The remaining amount (the portion above £1.5 million)	     12%
