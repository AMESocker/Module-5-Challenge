//Current Day
// moment().format("dddd, MMMM, Do YYYY");
var today = moment();
console.log("today", today);

$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentHour = moment().hour();
console.log(currentHour)

var columnHour = $(".col hour")
console.log(columnHour)
//compare current hour to hour in day chart and set format
if (currentHour == columnHour) {
    //CSS present
        ;
} else if (currentHour > columnHour) {
    //CSS past
        ;    
} else {
    //CSS future
    ;
};