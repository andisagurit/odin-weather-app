(()=>{"use strict";const t={getWeather:async function(t){const e=`https://api.weatherapi.com/v1/current.json?key=7f6f70f7bb2d46e2924204023230504&q=${t}&aqi=yes`,n=await fetch(e,{mode:"cors"}),c=function(t){const{location:{name:e,country:n,localtime:c},current:{temp_c:d,humidity:i,wind_mph:a,condition:{text:o,icon:s}}}=t;return{cityName:e,countryName:n,localtime:c,celcuis:d,humidity:i,windSpeedinMPH:a,text:o,icon:s}}(await n.json());return console.log(c),c}},e=t,n=function(t){if(!t)return;const e=document.getElementById("content");e.classList.add("active");const n=document.createElement("div");n.classList.add("city"),e.appendChild(n);const c=document.createElement("div");c.classList.add("div1"),n.appendChild(c);const d=document.createElement("p"),i=document.createElement("p"),a=document.createElement("img");d.classList.add("cityCountry"),i.classList.add("text"),a.classList.add("icon"),d.textContent=`${t.cityName}, ${t.countryName}`,i.textContent=`${t.text}`,a.src=`${t.icon}`,c.appendChild(d),c.appendChild(i),c.appendChild(a);const o=document.createElement("div");o.classList.add("tempDiv"),n.appendChild(o);const s=document.createElement("div");s.classList.add("allTemps"),s.textContent=`${t.celcuis} °C`,o.appendChild(s);const l=document.createElement("div");l.classList.add("div2"),n.appendChild(l);const m=document.createElement("p"),u=document.createElement("p");m.textContent=`Humidity: ${t.humidity} %`,u.textContent=`Wind: ${t.windSpeedinMPH} km/h`,l.appendChild(m),l.appendChild(u)},c=document.getElementById("searchForm"),d=document.getElementById("input-city"),i=document.querySelector(".search-button");c.addEventListener("submit",(t=>{t.preventDefault()})),i.addEventListener("click",(async()=>{if(""===d.value)return;const t=await e.getWeather(d.value);n(t),d.value=""}))})();