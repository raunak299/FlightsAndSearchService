function compareTime(dateTimeString1, dateTimeString2) {
  // Create Date objects from the date-time strings
  const date1 = new Date(dateTimeString1);
  const date2 = new Date(dateTimeString2);

  // Check if the Date objects are valid
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error("Invalid date-time string");
  }

  // Compare the Date objects
  if (date1 < date2) {
    return -1; // dateTimeString1 is earlier than dateTimeString2
  } else if (date1 > date2) {
    return 1; // dateTimeString1 is later than dateTimeString2
  } else {
    return 0; // dateTimeString1 is equal to dateTimeString2
  }
}

module.exports = {
  compareTime,
};
