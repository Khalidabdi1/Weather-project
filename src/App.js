import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './component/Header.js';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

let Weather_api=process.env.REACT_APP_WEATHER_API_KEY;
let city="Riyadh"


let https = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_api}&units=metric&lang=ar`;

//for weather icon :
//https://openweathermap.org/img/wn/03n@4x.png


//get api
axios.get(https)
.then((res)=>{
  console.log(res.data)
  

}).catch((err)=>{
  console.log(err)
})



function App() {
  let {t,i18n}=useTranslation()
  let [language,setLanguage]=useState("en")
  return (
    <div className="App" style={{display:"flex",flexDirection:"column"}}>
      <div className='continer'> 

        <Header city={city} Lan={language}/>



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
