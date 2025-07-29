import { useTranslation } from "react-i18next"
export default function WeatherData({data,description,max,min}){
    let {t,i18n}=useTranslation()
    return(
        <>
        <div style={{width:"60%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center",height:"80px"}}>
                    <h1 style={{color:"white",fontSize:"80px",margin:"0px",marginLeft:"15px"}}>{parseInt(data)}</h1>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" style={{width:"fit-content",height:"fit-content",marginBottom:"40px"}} alt="weather icon"></img>
            </div>

             <p style={{marginLeft:"20px",color:"white",fontSize:"20px"}}>{description}</p>

             <div style={{display:"flex",color:"white",justifyContent:"space-between"}}>
                <h5>{t("max")} {parseInt(max)}</h5>
                <h5 style={{marginLeft:"5px",marginRight:"5px"}}>| </h5>
                <h5>{t("min")}{parseInt(min)}</h5>

             </div>
        </div>
        </>
    )
}