
$(document).ready(function () {

    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();

        searchWeather(searchValue)
    })


    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=d612a9005a39f85f6f494b070e6e3182&units=imperial",
            dataType: "json",
        }).then(function (data) {
            console.log(data)
            var temp = data.main.temp;
            var humidity = data.main.humidity
            var windSpeed = data.wind.speed
      
            getUvIndex(data.coord.lon, data.coord.lat)

            // todo: create html using jquery and inject theese variables

            $(".temp").text(`Temperature: ${data.main.temp}`);
            $(".humid").text(`Humidity: ${data.main.humidity}`);
            $(".wind").text(`Wind Speed: ${data.wind.speed}`);
        })
    }

    function getUvIndex(long,lat){

        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=d612a9005a39f85f6f494b070e6e3182",
            dataType: "json",
        }).then(function (data) {
           console.log(data)
           // create html to display

           $(".uv").text(`UV Index: ${data.value}`);

        })

    }
});