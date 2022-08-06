$(document).ready(function () {
    //Moment.js code for current date and time
    let currentDay = moment().format("MMMM Do, YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDay;
    let currentHour = moment().format("HH");
});