var now = moment().format("dddd, MMMM Do, YYYY");
$('#date').append(now);


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
            var input = $(".inputText").val();

            localStorage.setItem("city", JSON.stringify(input));

            //var citySearch = $(".inputText")
            //window.localStorage.setItem('input', JSON.stringify(input));



        })

    });
});



function show(response) {
    return "<p>City: " + response.name + "," + response.sys.country + "</p>" +
        "<p>Description: <img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'> " + response.weather[0].main + "</p>" +
        "<p>Temperature: " + response.main.temp + "&deg;F</p>" +
        "<p>Wind Speed: " + response.wind.speed + "MPH</p>" +
        "<p>Humidity: " + response.main.humidity + "%</p>"
};