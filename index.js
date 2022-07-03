module.exports = {
  calculateTilEvent: function days(eventStartDate, todaysDate) {
    let difference = eventStartDate - todaysDate;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;

  },

    createData: function formatDate(date1) {
    let date = new Date(date1),
      month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = "" + date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    let formatedYear = year.slice(2, 4);

    return [formatedYear, month, day].join("");
  }};



  
  
  