// const buton = document.querySelector('.btn')

// const getirWeater = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// };

// buton.onclick=()=>{
//    let city= document.querySelector('.city').value
//    const idNumber = "07d79aac0de6642739cbd81b62e66918";
//    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${idNumber}`;
//    getirWeater(url)
// }

const liste = [];
const not= document.querySelector('.not')
const input = document.querySelector(".city");
const ekran = document.querySelector(".ekran");
const buton = document.querySelector(".btn");
const idNumber = "07d79aac0de6642739cbd81b62e66918";
const getir = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${idNumber}`
  )
    .then((response) => response.json())
    .then((data) => ekranabastir(data));
};

buton.onclick = () => {
  if (liste.includes(input.value)) {
    not.textContent =
      "You already know the weater for a city, pelease search for enother City ";
  } 
  else{
    getir(input.value);
    liste.push(input.value);
    console.log(liste);
    input.value = "";
  }
  
};

const ekranabastir = (data) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  ekran.innerHTML += `<div class="ms-5 card border border-1" style="width: 18rem; height:25rem;">
  
  <div class="card-body">
    <h3 class="card-title mt-4 text-info">${
      data.name
    } <sup class='text-white bg-warning'>${data.sys.country}</sup> </h3>
    <p class="card-text mt-2 display-1 mb-2 fw-bold ">${Math.ceil(
      data.main.temp - 273.15
    )}<sup class=''>C</sup></p>
    <img class='resim' src=${iconUrl}> </img>
   <h3 class="card-text mt-5 text-info fw-light">${data.weather[0].description.toUpperCase()}</h3>
  </div>
</div>
    `;
};
