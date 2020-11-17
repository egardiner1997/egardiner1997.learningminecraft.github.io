//Openweathermap scripts for dynamic forecast
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=864026d837b6f9641c1d5d20c101245b";
//This is for the changing weather summary
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("weather").textContent = jsObject.list[6].weather[0].main;
    document.getElementById('high').textContent = Math.round(jsObject.list[6].main.temp_max);
    document.getElementById('temp').textContent = Math.round(jsObject.list[6].main.temp);
    document.getElementById('humid').textContent = jsObject.list[6].main.humidity;
    document.getElementById('wSpeed').textContent = jsObject.list[6].wind.speed;

    console.log("Dyanmiac Weather Summary");
}); 

  //This is for the 5 Day Forecast Temperatures
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);    
    //Find all the ones with 18:00:00 as the dt_text for the 5 Day Forecast
    document.getElementById('monday').textContent = Math.round(jsObject.list[6].main.temp_max);
    document.getElementById('tuesday').textContent = Math.round(jsObject.list[14].main.temp_max);
    document.getElementById('wednesday').textContent = Math.round(jsObject.list[22].main.temp_max);
    document.getElementById('thursday').textContent = Math.round(jsObject.list[30].main.temp_max);
    document.getElementById('friday').textContent = Math.round(jsObject.list[38].main.temp_max);


    console.log("5 Day Forecast Temperatures");
  });


  //This is for the 5 Day Forecast Images
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);    
    //Find all the ones with 18:00:00 as the dt_text for the images
    //Monday
    const image = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[6].weather[0].description;  // note how we reference the weather array
    document.getElementById('image').textContent = image; // informational specification only, shows the link of the icon
    document.getElementById('icon').setAttribute('src', image);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);


    //Tuesday
    const image1 = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';  // note the concatenation
    const desc1 = jsObject.list[14].weather[0].description;  // note how we reference the weather array
    document.getElementById('image1').textContent = image1; // informational specification only, shows the link of the icon
    document.getElementById('icon1').setAttribute('src', image1);  // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', desc1);


    //Wednesday
    const image2 = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';  // note the concatenation
    const desc2 = jsObject.list[22].weather[0].description;  // note how we reference the weather array
    document.getElementById('image2').textContent = image2; // informational specification only, shows the link of the icon
    document.getElementById('icon2').setAttribute('src', image2);  // focus on the setAttribute() method
    document.getElementById('icon2').setAttribute('alt', desc2);


    //Thursday
    const image3 = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';  // note the concatenation
    const desc3 = jsObject.list[30].weather[0].description;  // note how we reference the weather array
    document.getElementById('image3').textContent = image3; // informational specification only, shows the link of the icon
    document.getElementById('icon3').setAttribute('src', image3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc3);


    //Friday
    const image4 = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';  // note the concatenation
    const desc4 = jsObject.list[38].weather[0].description;  // note how we reference the weather array
    document.getElementById('image4').textContent = image4; // informational specification only, shows the link of the icon
    document.getElementById('icon4').setAttribute('src', image4);  // focus on the setAttribute() method
    document.getElementById('icon4').setAttribute('alt', desc4);

    console.log("5 Day Forecast Images");
});


//wind chill script
  function chillInfo(){
    var temp= parseFloat(document.getElementById('temp').innerHTML);
    var wSpeed= parseFloat(document.getElementById('wSpeed').innerHTML);
    var calcChill = chillWind(temp, wSpeed);
    document.getElementById('windChill').innerHTML = calcChill;
    }
    
    function chillWind(a, b) {
        
        if (a < 50 && b > 3){
        console.log("This should show the temp and the speed calculated as the wind chill.");    
        var windChill = (35.74 + (0.6215 * a))-(35.75 * Math.pow(b,0.16)) + (0.4275*a*Math.pow(b,0.16));
        var windChill= Math.round(windChill);
        return windChill;
    }
        else{
        console.log("This is what happens if it is not within 50 and 3.");
        windChill = "N/A"
        return windChill;
        }
        
    }
