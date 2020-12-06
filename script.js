
$(document).ready(function () {

    $("#search-button").on("click", function () {
        var searchValue = $("#search-value").val();

        searchWeather(searchValue)
    })


    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=519b84679336dd9afdfa29d6fd344fb5&units=imperial`,
            dataType: "json",
        }).then(function (data) {
            console.log(data)
            getUvIndex(data.city.coord.lon, data.city.coord.lat)

            for (var i = 0; i < data.list.length; i += 8) {
                var temp = data.list[i].main.temp;
                var humidity = data.list[i].main.humidity;
                var windSpeed = data.list[i].wind.speed;


                // todo: create html using jquery and inject theese variables
                $(".forcastContainer").append(`
            <div class="card ">
            <div class="card-body temp">
            <h4>Date: ${data.list[i].dt_txt}</h4>
            <h5>Temperature</h5>
            ${temp}
            </div>
        </div>
        <div class="card ">
            <div class="card-body humid">
            <h5>humidity</h5>
            ${humidity}
            </div>
          </div>
          <div class="card ">
            <div class="card-body wind">
            <h5>Wind Speed</h5>
            ${windSpeed}
            </div>
          </div>
          <div class="card ">
            <div class="card-body uv">
            </div>
          </div>
            `)
               
            }
        })
    }

    function getUvIndex(long, lat) {

        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=d612a9005a39f85f6f494b070e6e3182",
            dataType: "json",
        }).then(function (data) {
            console.log(data)
            // create html to display
            $(".uvContainer").html(`
            <h3>current uv index: ${data.value}<h3> 
            `

            )
            

        })

    }
});