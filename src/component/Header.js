import moment from "moment"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "moment/locale/ar"


export default function Header({city,Lan}){
  let {t,i18n}=useTranslation()


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
useEffect(()=>{
if(Lan==="en"){
   moment.locale("en");
}else{
    moment.locale("ar");
}
},[Lan])

    return(
        <>
        {/* i need to change the language and style when is change */}
        <div style={english.continer.style}>
            <h1 style={english.h1.style}>{t("city")}</h1>
            <h4 style={english.h4.style}>{moment().format("ll")}</h4>
          
        </div>
          <hr style={english.hr.style}></hr>
        </>
    )
}