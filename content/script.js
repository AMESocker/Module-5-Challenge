//----Current Day---Top of Page----
    // moment().format("dddd, MMMM, Do YYYY");
    var today = moment();
    console.log("today", today);

    $("#currentDay").text(today.format("MMM Do, YYYY"));

//----Column Color----
    // var currentHour = moment().hour();

    var currentHour = 18
    console.log(currentHour)

    function eventColor() {
    if (currentHour == rowHour) {
        eventColumn.addClass("present");
        //CSS present
    } else if (currentHour > rowHour) {
        eventColumn.addClass("past");
        //CSS past   
    } else if (currentHour < rowHour) { 
        eventColumn.addClass("future");
        //CSS future;
    };
    }

    // for (i = 8; i < 19 ; i++){console.log(i)};
    // var columnHour = $("#i").val();
    // var eventColumn = $("#iE");
    // var rowHour = i
    // eventColor();
    // console.log(eachHour)

    //I believe there is a better way to write this next section, however it works. Somehow put a for loop to assign values as above.

//----Each Hour----
    //9 Hour
    var columnHour = $("#9").val();
    var eventColumn = $("#9E");
    var rowHour = 9
    eventColor();
    //10 Hour
    var columnHour = $("#10").val();
    var eventColumn = $("#10E");
    var rowHour = 10
    eventColor();
    //11 Hour
    var columnHour = $("#11").val();
    var eventColumn = $("#11E");
    var rowHour = 11
    eventColor();
    //12 Hour
    var columnHour = $("#12").val();
    var eventColumn = $("#12E");
    var rowHour = 12
    eventColor();
    //13 Hour (1pm)
    var columnHour = $("#13").val();
    var eventColumn = $("#13E");
    var rowHour = 13
    eventColor();
    //14 Hour (2pm)
    var columnHour = $("#14").val();
    var eventColumn = $("#14E");
    var rowHour = 14
    eventColor();
    //15 Hour (3pm)
    var columnHour = $("#15").val();
    var eventColumn = $("#15E");
    var rowHour = 15
    eventColor();
    //16 Hour (4pm)
    var columnHour = $("#16").val();
    var eventColumn = $("#16E");
    var rowHour = 16
    eventColor();
    //17 Hour (5pm)
    var columnHour = $("#17").val();
    var eventColumn = $("#17E");
    var rowHour = 17
    eventColor();
    //18 Hour (6pm)
    var columnHour = $("#18").val();
    var eventColumn = $("#18E");
    var rowHour = 18
    eventColor();
//----

//----Enter Event Info----
