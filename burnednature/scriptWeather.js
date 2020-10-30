const apikey = "90d18ae59e12d71380ad1cb35e8400fd";

const main = document.getElementById('main');
const input = document.getElementById('form');
const form = document.getElementById('btnSearch');
const search = document.getElementById('search');

input.addEventListener('submit', (e) => {
    e.preventDefault();
    return true;
})

const url = (city) => 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), 
    { origin: "cors "});
    const respData = await resp.json();

    console.log(respData, KtoC(respData.main.temp));

    addWeatherToPage(respData);
} ''

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);
    const situation = translate(data.weather[0].main)
    const weather = document.createElement('div');
    weather.classList.add('weather');
    // if(temp.length > 5) {
    console.log(temp)
    console.log(situation)
    weather.innerHTML = `<h2>${temp}°C - ${situation}</h2>`;
    // }else {
    //     weather.innerHTML = `
    //     <h2> ${temp}°C</h2>`;
    // }

    main.innerHTML = '';
    main.appendChild(weather);
}

function KtoC(K) {
    return (K - 273.15).toFixed(1);
}

function translate(text) {
    switch (text) {
        case "Clear":
            return "Céu limpo";
            break;
        
        case "Thunderstorm":
            return "Trovoadas"
            break;
        
        case "Drizzle":
            return "Garoando";
            break;
        
        case "Rain":
            return "Chovendo";
            break;

        case "Snow":
            return "Nevando";
            return;

        case "Clouds":
            return "Nublado";
            break;

        case "Mist":
            return "Névoa";
            break;
            
        case "Smoke":
            return "Névoa";
            break;

        case "Haze":
            return "Mudança atmosférica";
            break;
        
        case "Dust":
            return "Mudança atmosférica";
            break;
    
        case "Fog":
            return "Mudança atmosférica";
            break;
        
        case "Sand":
            return "Mudança atmosférica";
            break;
            
        case "Ash":
            return "Mudança atmosférica";
            break;
        
        case "Squall":
            return "Mudança atmosférica";
            break;
        
        case "Tornado":
            return "Mudanã atmosférica"
            break;
    }
}

form.addEventListener('click', () => {
    const city = search.value;

    if(city) {
        getWeatherByLocation(city)
    }
})
