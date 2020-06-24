$(document).ready(function() {
    $(".submit").click(function() {
        var apiKey = "&appid=11283a9a367132ea8ba6c11df14c96c6";
        var city = $(".inputText").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var widget = show(response);
            $("#show").html(widget);
            $(".inputText").val("");
            console.log(queryURL);


            console.log(response);

        })

    });
});

function show(response) {
    return "<p>City: " + response.name + "," + response.sys.country + "</p>" +
        "<p>Description: " + response.weather[0].main + "</p>" +
        "<p>Temperature: " + response.main.temp + "F" + "</p>" +
        "<p>Wind Speed: " + response.wind.speed + "MPH" + "</p>" +
        "<p>Humidity: " + response.main.humidity + "%" + "</p>"

}