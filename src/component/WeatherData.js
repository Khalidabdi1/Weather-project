export default function WeatherData({data}){
    console.log(`from child ${data}`)
    return(
        <>
        <div style={{width:"60%"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center"}}>
                    <h1 style={{color:"white",fontSize:"80px",margin:"0px",marginLeft:"15px"}}>{data}</h1>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" style={{width:"fit-content",height:"fit-content",marginBottom:"40px"}}></img>
            </div>

            
        </div>
        </>
    )
}