let apikey="ffebfcb390f729dd055a01fc2e44f654";
let apiurl="https://api.openweathermap.org/data/2.5/weather?id=";
let city;
let userCity= document.getElementById("userText");
let temperature=document.getElementById("temp");
let ct=document.getElementById("city");
let humidity=document.getElementById("humidity-info");
let windInfo=document.getElementById("wind-info");
let weatherImage=document.querySelector(".weather_img");

async function getWeatherData()
{
    if(userCity.value=="")
    {
        alert("ENTER A CITY NAME")
    }else{
        city= userCity.value;
        let response=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apikey}`
        );
        let data= await response.json();
        ct.innerHTML= data.name;
        // temperature.innerHTML= Math.round(data.main.temp - 273.15)+"°C";
        // humidity.innerHTML= data.main.humidity+"%";
        // windInfo.innerHTML= data.wind.speed+"km/h";
        userCity.value="";

        if(data.weather[0].main=="Clear"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/512/3032/3032894.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/512/3706/3706415.png";
        }
        else if(data.weather[0].main=="Drizzel"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/128/2059/2059322.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/128/4151/4151022.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
        }
        console.log(data)
    }
}