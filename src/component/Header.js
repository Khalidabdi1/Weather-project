import moment from "moment"

export default function Header({city}){
let english={
    continer:{
      style:{display:"flex",alignItems:"center",color:"white"}
    },
    // order here will change in Ar
    h1:{
        style:{order:"0"}
    },
        // order here will change in Ar

    h4:{
        style:{marginTop:"40px",marginLeft:"10px",order:"1"},
    },
    hr:{
      style:  {border:"1px solid white"}
    }
}

    return(
        <>
        {/* i need to change the language and style when is change */}
        <div style={english.continer.style}>
            <h1 style={english.h1.style}>{city}</h1>
            <h4 style={english.h4.style}>{moment().format("ll")}</h4>
          
        </div>
          <hr style={english.hr.style}></hr>
        </>
    )
}