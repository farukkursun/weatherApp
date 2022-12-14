const liste = [];
const form = document.querySelector("form");
const not = document.querySelector(".not");
const input = document.querySelector(".city");
const ekran = document.querySelector(".ekran");
const buton = document.querySelector(".btn");
const idNumber = "07d79aac0de6642739cbd81b62e66918";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const spanList = ekran.querySelectorAll("div span");
  const spanListArray = Array.from(spanList).map((span) => span.innerText);
  // console.log(spanListArray);
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${idNumber}&units=metric`
    ).then((response) => response.json());
    
    if (spanListArray.includes(data.name)) {
      not.textContent = `You already know the weater for ${input.value}, pelease search for enother City!`;
      setTimeout(() => {
        not.textContent = "";
      }, 5000);
    } else {
      ekranabastir(data);
      
    }
  } catch (error) {
    not.textContent = "City not found !";
    setTimeout(() => {
      not.textContent = "";
    }, 5000);
  }

  form.reset();
});

const ekranabastir = (data) => {
  const { name, main, sys, weather } = data;
  console.log(name);
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  ekran.innerHTML += `<div class=" ms-5 card border border-1" style="width: 18rem; height:25rem;">
  
  <div class="card-body">
     <h3 class="card-title mt-4 text-info"> <span>${name}</span>  <sup class='ülke text-white bg-warning'>${
    sys.country
  }</sup> </h3>
    <p class="card-text mt-2 display-1 mb-2 fw-bold ">${Math.ceil(
      main.temp
    )}<sup class='sup'>°C</sup></p>
    <img src=${iconUrl}> </img>
   <h3 class="card-text mt-4 text-info fw-light">${weather[0].description.toUpperCase()}</h3>
  </div>
</div>
    `;
};
