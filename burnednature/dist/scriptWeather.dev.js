"use strict";

var apikey = "90d18ae59e12d71380ad1cb35e8400fd";
var main = document.getElementById('main');
var input = document.getElementById('form');
var form = document.getElementById('btnSearch');
var search = document.getElementById('search');
input.addEventListener('submit', function (e) {
  e.preventDefault();
  return true;
});

var url = function url(city) {
  return "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apikey);
};

function getWeatherByLocation(city) {
  var resp, respData;
  return regeneratorRuntime.async(function getWeatherByLocation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url(city), {
            origin: "cors "
          }));

        case 2:
          resp = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(resp.json());

        case 5:
          respData = _context.sent;
          console.log(respData, KtoC(respData.main.temp));
          addWeatherToPage(respData);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

'';

function addWeatherToPage(data) {
  var temp = KtoC(data.main.temp);
  var situation = translate(data.weather[0].main);
  var weather = document.createElement('div');
  weather.classList.add('weather'); // if(temp.length > 5) {

  console.log(temp);
  console.log(situation);
  weather.innerHTML = "<h2>".concat(temp, "\xB0C - ").concat(situation, "</h2>"); // }else {
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
      return "Trovoadas";
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
      return "Mudanã atmosférica";
      break;
  }
}

form.addEventListener('click', function () {
  var city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
});