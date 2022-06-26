module.exports = {
  tiny: function (string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
  
  },

  travel2: function(){
    console.log("travel2")
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
  }}


  