var cityList =$("#city-list");
var cities = [];
var key = "fc8bffadcdca6a94d021c093eac22797";

//Format for day
function FormatDay(date){
    var date = new Date();
    console.log(date);
    var month = date.getMonth()+1;
    var day = date.getDate();
    
    var dayOutput = date.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return dayOutput;
}

init();

function init(){
    
    //Parsing the JSON string to an object
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // If cities were retrieved from localStorage, update the cities array to it
    if (storedCities !== null) {
        cities = storedCities;
      }
   
    renderCities();
    
}

//Function StoreCities()
function storeCities(){
    // Stringify and set "cities" key in localStorage to cities array
   localStorage.setItem("cities", JSON.stringify(cities));
   console.log(localStorage);
 }

 function renderCities() {
    cityList.empty();
    
    // Render a new li for each city
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      
      var li = $("<li>").text(city);
      li.attr("id","listC");
      li.attr("data-city", city);
      li.attr("class", "list-group-item");
      console.log(li);
      cityList.prepend(li);
    }
    //Get Response weather for the first city only
    if (!city){
        return
    } 
    else{
        getResponseWeather(city)
    };
}   