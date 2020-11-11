$(document).ready(function(){

$("#search-button").on("click", function(){
var searchValue = $("search-value").val();


$("#search-value").val("");

searchWeather(searchValue)
})


function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url: "api.openweathermap.org/data/2.5/weather?q" + searchValue + "&appid=d612a9005a39f85f6f494b070e6e3182&units=imperial",
        dataType: "json",
    }).then(function(data) {
console.log(data)
}


)}


});