import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './component/Header.js';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import WeatherData from './component/WeatherData.js';

let Weather_api=process.env.REACT_APP_WEATHER_API_KEY;
let city="riyadh"








function App() {
let [temp,setTemp]=useState(0)


  let {t,i18n}=useTranslation()
  let [language,setLanguage]=useState("en")
  let [description,setDescription]=useState("")
  let [min,setMin]=useState(0)
  let [max,setMax]=useState(0)
  let [iconUrl,setIconUrl]=useState(null)

let https = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_api}&units=metric&lang=en`;


      useEffect(()=>{
      axios.get(https).then((res)=>{
        setTemp(res.data.main.temp)
        setDescription(res.data.weather[0].description)
        setIconUrl(res.data.weather[0].icon)
        setMax(res.data.main.temp_max)
        setMin(res.data.main.temp_min)
        //weather[0].description
      //main.temp
      }).catch((err)=>{
        console.log(err)
      })

},[])
useEffect(()=>{
  i18n.changeLanguage(language==="en"?"en":"ar")
},[language])

  return (
    <div className="App" style={{display:"flex",flexDirection:"column"}}>
      <div className='continer'style={{height:"fit-content"}} > 

        <Header city={city} Lan={language}/>
{/** here is weather info */}
      <div style={{display:"flex",direction:language==="en"? "ltr":"rtl"}}>
           <WeatherData data={temp} description={description} max={max} min={min}/>

          <div style={{width:"40%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",order:"1"}}>
              <img src={`https://openweathermap.org/img/wn/${iconUrl}@4x.png`} style={{width:"300px",height:"300px"}}></img>
          </div>  
      </div>

      </div>

      {/* button than change language */}
      <div style={{width: "500px",marginTop:"20px",direction:language==="ar"? "rtl":"ltr"}}>
              <button style={{border:"none",outline:"none",backgroundColor:"transparent",color:"white"}}
              onClick={()=>{
                if(language==="en"){
                  i18n.changeLanguage("en")
                  setLanguage("ar")
                }else if (language==="ar"){
                  i18n.changeLanguage("ar")
                  setLanguage("en")
                }
              }}>
                {t("language")}
                </button>
        </div>

    </div>
  );
}

export default App;
