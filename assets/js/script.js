$(document).ready(function () {
//Moment.js code for current date and time
  let currentDay = moment().format("MMMM, DD, YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = currentDay;
  let currentHour = moment().hour();

// Time management function to compare current time with with the schedule  
  $(".time-div").each(function () {
      let timeDiv = parseInt($(this).attr("id").split('-')[1]);
      
      if (timeDiv < currentHour) {
        $(this).addClass("past");
        
      } else if (timeDiv === currentHour) {
        $(this).addClass("present");
      
      } else {
        $(this).addClass("future");
      }
    });

// Save button event 
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      let value = $(this).siblings(".time-block").val();
      let time = ($(this).parent().attr("id"));
      localStorage.setItem(time, value);
    });

// Returns saved text from the local storage    
  $("#h-9 .time-block").val(localStorage.getItem("h-9"));
  $("#h-10 .time-block").val(localStorage.getItem("h-10"));
  $("#h-11 .time-block").val(localStorage.getItem("h-11"));
  $("#h-12 .time-block").val(localStorage.getItem("h-12"));
  $("#h-13 .time-block").val(localStorage.getItem("h-13"));
  $("#h-14 .time-block").val(localStorage.getItem("h-14"));
  $("#h-15 .time-block").val(localStorage.getItem("h-15"));
  $("#h-16 .time-block").val(localStorage.getItem("h-16"));
  $("#h-17 .time-block").val(localStorage.getItem("h-17"));
  
});