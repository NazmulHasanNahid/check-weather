const API_KEY = `0a711f16ead9f753e636a6ca3d886862`;
const searchTemp  = () =>{
  const city = document.getElementById('city-name').value ;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  //console.log(url)

  fetch(url)
  .then(res => res.json())
  .then(data => displayTemp(data))
}
const setInnerText = (id,text) => {
  document.getElementById(id).innerText = text ;
}
const displayTemp = temp =>{
    setInnerText('city', temp.name)
    setInnerText('temperature', temp.main.temp)
    setInnerText('condition', temp.weather[0].main)
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('w-icon');
    imgIcon.setAttribute('src', url)
}