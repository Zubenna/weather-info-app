(()=>{"use strict";const e=document.querySelector("#enter-city"),t=document.querySelector("#submit-city"),n=document.querySelector("#set-icon"),r=document.querySelector("#wait-msg"),o=document.querySelector(".error-info"),c=document.querySelector(".c-flag"),i=document.querySelector("#temp-display"),u=document.querySelector("#temp-symbol"),l=document.querySelector("#toggle-temp"),s=(document.querySelector("#disp-time"),document.querySelector(".clock")),d=document.querySelector("#city"),a=document.querySelector("#country"),m=document.querySelector("#feels"),y=document.querySelector("#description"),p=document.querySelector("#humidity"),x=document.querySelector("#sun-rise"),T=document.querySelector("#sun-set"),S=document.querySelector("#wind-speed");let g="",q=!1;const f=e=>{c.innerHTML=`<img src="https://www.countryflags.io/${e}/flat/64.png">`},h=(e,t)=>{d.innerText=`${e}, `,a.innerText=t},w=(e,t,n)=>{m.innerText=`Feels Like: ${e}°C | `,y.innerText=`${t} | `,p.innerText=`Humidity: ${n}%`},$=(e,t,n)=>{x.innerText=`Lon: ${e} | `,T.innerText=`Lat: ${t} | `,S.innerText=`Wind Speed: ${n}M/s`};t.addEventListener("click",(t=>{t.preventDefault(t),async function(t){r.innerText="Loaading";try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=4c726c2ad8e25995fa54253e43f9b966`,{mode:"cors"}),c=await e.json();r.innerText="",console.log(c);const d=c.weather[0].icon;n.innerHTML=`<img src="./icons/${d}.png">`,f(c.sys.country),g=Math.floor(c.main.temp-273),i.innerText=`${g}°`,u.innerText="C",o.innerText="",l.style.display="block",h(c.name,c.sys.country);const a=Math.floor(c.main.feels_like-273);w(a,c.weather[0].description,c.main.humidity),$(c.coord.lon,c.coord.lat,c.wind.speed),setInterval((()=>{(()=>{let e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();s.innerText=t})()}),500)}catch(t){""===e.value&&(o.innerText="Nothing to display, Enter city name")}}(e.value),e.value=""})),l.addEventListener("click",(e=>{e.preventDefault(e),(()=>{q=!q;let e=i.innerText,t=Number(e.slice(0,e.length-1));if(q){let e=(9*t/5+32).toFixed(2);i.innerText=`${e}°`,u.innerText="F",l.innerText="See temp in C"}else{let e=(5*(t-32)/9).toFixed(2);i.innerText=`${e}°`,u.innerText="C",l.innerText="See temp in F"}})()}))})();