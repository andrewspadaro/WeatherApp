$(document).ready(function(){

    $("#search-button").on("click", function(){
        var searchValue = $("#search-value").val();

    $("#search-value").val("");
    searchWeather(searchValue)
});


    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
            url://my api key + searchValue + rest of api key,
            dataType: "json", 
        }).then(function(data) {
            console.log(data)
            //create a history link for the search (look up .push())
            // creating a card for appending weather data
            var title = $("<h3>").addClass(card-title).text(data.name);
            var card = $("<div>").addClass("card");
           



    }



        )}
    

});