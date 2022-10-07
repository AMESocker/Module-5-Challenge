//----Current Day---Top of Page----
    // moment().format("dddd, MMMM, Do YYYY");
    var today = moment();
    console.log("today", today);

    $("#currentDay").text(today.format("MMM Do, YYYY"));

//----Column Color----
    var currentHour = moment().hour();

    // var currentHour = 11
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
    var rowHour = 18;
    eventColor();
//----

//----Enter Event Info----
function addToLocalStorage9 (){
    localStorage.setItem("9am", $("#9E").val());
};
function addToLocalStorage10 (){
    localStorage.setItem("10am", $("#10E").val());
};
function addToLocalStorage11 (){
    localStorage.setItem("11am", $("#11E").val());
};
function addToLocalStorage12 (){
    localStorage.setItem("12am", $("#12E").val());
};
function addToLocalStorage13 (){
    localStorage.setItem("13am", $("#13E").val());
};
function addToLocalStorage14 (){
    localStorage.setItem("14am", $("#14E").val());
};
function addToLocalStorage15 (){
    localStorage.setItem("15am", $("#15E").val());
};
function addToLocalStorage16 (){
    localStorage.setItem("16am", $("#16E").val());
};
function addToLocalStorage17 (){
    localStorage.setItem("17am", $("#17E").val());
};
function addToLocalStorage18 (){
    localStorage.setItem("18am", $("#18E").val());
};
var eventInfo = $("#9E").text();
console.log(eventInfo)

//----Event Listeners----

document.getElementById("9B").addEventListener("click", addToLocalStorage9);
document.getElementById("10B").addEventListener("click", addToLocalStorage10);
document.getElementById("11B").addEventListener("click", addToLocalStorage11);
document.getElementById("12B").addEventListener("click", addToLocalStorage12);
document.getElementById("13B").addEventListener("click", addToLocalStorage13);
document.getElementById("14B").addEventListener("click", addToLocalStorage14);
document.getElementById("15B").addEventListener("click", addToLocalStorage15);
document.getElementById("16B").addEventListener("click", addToLocalStorage16);
document.getElementById("17B").addEventListener("click", addToLocalStorage17);
document.getElementById("18B").addEventListener("click", addToLocalStorage18);

//----Get From Local Storage----
//----Set Local Storage----
// function InputEvent() 
// var eventInfo = "Make like a tree and get outta here.";




// localStorage.setItem("9am", eventInfo);

// console.log(saveData);

// addEventListener("click", $("button"));
// console.log(addEventListener)
// 