const input=document.querySelector(".input");
const button=document.querySelector(".btn-search");
const images=document.querySelector('.seasons')
async function weathers(citys){
    const rest=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=49634f88a735a9240072af80aca788f6&units=metric`)
    if (rest.status===404) {
        alert('You are entered wroung city Name')
    }
    const data=await rest.json();
    document.querySelector('.celsius').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.citys').innerHTML=data.name;
    document.querySelector('.humidityP').innerHTML=Math.round(data.main.humidity)+"%";
    document.querySelector('.wind').innerHTML=Math.round(data.wind.speed)+"Km/h";
    if (data.weather[0].main==='Clouds') {
        images.src='./img/cloudy.jpg'
    }else if(data.weather[0].main==='Rain'){
        images.src='./img/Rainy.jpg'
    }else if(data.weather[0].main==='Clear'){
        images.src='./img/Sunny.jpg'
    }else if(data.weather[0].main==='Tornado'){
        images.src='./img/Stromy.jpg'
    }else if(data.weather[0].main==='Mist'){
        images.src='./img/Windy.jpg'
    }else{
        input.value= "🧐";
    }
}

button.addEventListener("click",()=>{

weathers(input.value)

})