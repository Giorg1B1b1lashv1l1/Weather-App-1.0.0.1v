//Search input
const search = document.getElementById("searchinp")
const searchBtn = document.getElementById("searchbtn")

//weather icons adn types
const celsius = document.getElementById("celsius")
const city = document.getElementById("city")
const date = document.getElementById("date")
const icon = document.getElementById("icon")
const weatherType = document.getElementById("type")

//best cities 
const gori = document.getElementById("Gori")
const pasanauri = document.getElementById("Pasanauri")
const tbilisi = document.getElementById("Tbilisi")
const batumi = document.getElementById("Batumi")

//weather type percents 
const cloudPercent = document.getElementById("cloud-percent")
const humidityPercent = document.getElementById("Humidity-percent")
const windPercent = document.getElementById("Wind-percent")
const rainPercent = document.getElementById("Rain-percent")

//main container
const mainDiv = document.getElementById("main")
//api key
const key = "d7c5315551a0fe41a94a1dc2f52690d2"
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


//Input
let inpValue = ""

search.addEventListener("input" , (e)=>{
    inpValue = e.target.value
    console.log(inpValue)
})

//GET API
const getData = async(city)=>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        if(!response.ok){
            throw new Error("could not fetch response")
        }

        const data = await response.json()
        console.log(data)
        displayWeather(data)
        
    }catch(error){
        console.error(error)
    }
}

searchBtn.addEventListener("click" , ()=>{
    getData(inpValue)
    
    
})

const displayWeather = (data)=>{
    if(data.name == inpValue){
        search.value = ""
        inpValue = ""
        celsius.innerHTML = `${(data.main.temp - 273.15).toFixed(1)}°`
        city.innerHTML = data.name
        date.innerHTML = new Date()
        weatherType.innerHTML = data.weather[0].main
        icon.src = `Resources/${data.weather[0].main}.png`
        mainDiv.style.background = `url(/Resources/${data.weather[0].main}.jpg)`
        mainDiv.style.backgroundPosition = "center"
        mainDiv.style.backgroundRepeat = "no-repeat"
        mainDiv.style.backgroundSize = "cover"
        cloudPercent.innerHTML = `${data.clouds.all}%`
        humidityPercent.innerHTML = `${data.main.humidity}%`
        windPercent.innerHTML = `${data.wind.speed}s`
    }
}


//best cities
//Gori
const Gori = (data)=>{
    gori.addEventListener("click"  , ()=>{
        inpValue = data
        getData(data)
        displayWeather(data)

        
        
    })
}
Gori("Gori")

//Pasanauri
const Pasanauri = (data)=>{
    pasanauri.addEventListener("click"  , ()=>{
        inpValue = data
        getData(data)
        displayWeather(data)

        
        
    })
}
Pasanauri("Pasanauri")

//Tbilisi
const Tbilisi = (data)=>{
    tbilisi.addEventListener("click"  , ()=>{
        inpValue = data
        getData(data)
        displayWeather(data)

        
        
    })
}
Tbilisi("Tbilisi")

//Batumi
const Batumi= (data)=>{
    batumi.addEventListener("click"  , ()=>{
        inpValue = data
        getData(data)
        displayWeather(data)

        
        
    })
}
Batumi("Batumi")


