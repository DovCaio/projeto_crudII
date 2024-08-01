"user client"
import responseBoxStyle from "@/styles/resposeBoxStyle.module.css"
import CloseIco from "@/app/icons/CloseIco"
import React from "react"



export default function ResponseBox({goodRequest, text, display, setDisplay}: any){

    


   


    
    if (display == "flex" && goodRequest){

    
        setInterval(() => {
    
            setDisplay("none")
        }, 3000)

    }





    return (


        <div className={responseBoxStyle.responseBox} style={
            {backgroundColor: (goodRequest ?"#33ff80":"#C41E3A" ) ,display: display}
    }

        >

            <button onClick={(e) => {
                    e.preventDefault() 
                    setDisplay("none")
                }}>
                {
                    <CloseIco/>
                }
            </button>
        
            <h3>{goodRequest ? "Sucess" : "Fail"}</h3>

            <p>
                {
                    text
                }
            </p>


        </div>

    )


}