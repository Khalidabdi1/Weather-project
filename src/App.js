import logo from './logo.svg';
import './App.css';
import axios from 'axios';

let Weather_api=process.env.REACT_APP_WEATHER_API_KEY;
let city="Riyadh"
let https=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_api}&units=metric&lang=ar`

//api
axios.get(https)
.then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log(err)
})

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
