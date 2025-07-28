import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './component/Header.js';
import { useTranslation } from "react-i18next";

let Weather_api=process.env.REACT_APP_WEATHER_API_KEY;
let city="Riyadh"


let https = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_api}&units=metric&lang=en`;

//for weather icon :
//https://openweathermap.org/img/wn/03n@4x.png


//get api
// axios.get(https)
// .then((res)=>{
//   console.log(res.data)
  

// }).catch((err)=>{
//   console.log(err)
// })



function App() {
  let {t,i18n}=useTranslation()

  return (
    <div className="App">
      <div className='continer'> 

        <Header city={city}/>
<div>
  <h1>{t("welcome")}</h1>
  <button onClick={()=>{
    i18n.changeLanguage("en")
  }}> change</button>
</div>
      </div>
    </div>
  );
}

export default App;
