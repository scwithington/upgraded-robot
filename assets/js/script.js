var todaysDate = moment().format("dddd, MMMM D, YYYY");
var currentTime = moment().format("hh:mm");

// console.log(currentTime, todaysDate);

$("#currentDay").text(todaysDate);

// creates function allowing for dynamic clock
setInterval(function () {
  // creating new date and using local time function
  var num = new Date().toLocaleTimeString();
  // changing text to match in HTML
  $("#whatTimeIsIt").text(num);
}, 1000);

function init() {
  var myHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

  for (var i = 0; i < myHours.length; i++) {
    // setting attributes for textarea
    
    var textAreaEl = $("<textarea class='localText'>");
    textAreaEl.attr('data-hour', myHours[i]);
    // if text has been saved, show upon page reset
    if (localStorage.getItem(myHours[i] != null)) {
      textAreaEl.text(localStorage.getItem(myHours[i]));
    }

    var saveButton = $("<button class = 'saveBtn col-1'></button>");
    saveButton.attr('data-hour', myHours[i]);
  }

  // storing text in local storage
  $(document).on("click", ".saveBtn", function (event) {
    var saveText = $(this).siblings(".localText").val();
    var saveHour = $(this).attr("data-hour");

    localStorage.setItem(saveHour, saveText);
    console.log(saveHour, saveText);
  });
}

init();