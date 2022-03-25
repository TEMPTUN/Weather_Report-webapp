
let button=document.getElementById("searchbar");
let inputval=document.getElementById("write");
let city=document.getElementById("city");
let temperature=document.getElementById("temp");
let desc=document.getElementById("descriptio");
let wind=document.getElementById("wind");
let hum=document.getElementById("humidity");
let ico=document.getElementById("icons");

let weather={
    apiKey:"04e343930fe8283f623efbea6299b6cb",
    fweather: function (city){
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city+"&units=metric"
            +"&appid="
            +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data))
        .catch((error) => 
            {alert("Incorrect city name")}
        )
        
    },
    displayweather: function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;       
        console.log(name,description,temp,humidity)
        city.textContent="Weather in "+ name;
        temperature.innerText=temp+"°"+"C";
        ico.src="https://openweathermap.org/img/wn/"+icon+"@2x.png"
        desc.innerText=description;
        hum.textContent="Humidity: "+humidity;
        wind.innerText="Wind Speed: "+speed+"km/hr";
    },
    search:function(){
        this.fweather(inputval.value)
    }
};
button.addEventListener('click',function(){
    weather.search()
})