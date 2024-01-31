let form = document.querySelector('form');
let input = document.querySelector('input');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h4 = document.querySelector('h4')
const img = document.querySelector('img');

let fetchWeather = async (e) => {
try {
    e.preventDefault();
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=30d26047d2a6423ab33120321232712&q=${input.value}&aqi=yes`);
    const data = await response.json();
    console.log(data); 
    h1.innerText = data.current.temp_c + "" + "°C";
    h2.innerText = data.location.name;
    h4.innerText = data.current.condition.text;
    img.setAttribute("src" , data.current.condition.icon)
} catch (error) {
    window.alert("Enter Valid City Name")
}
    form.reset()
}

form.addEventListener("submit", fetchWeather)