"user client"
import responseBoxStyle from "@/styles/resposeBoxStyle.module.css"
import CloseIco from "@/app/icons/CloseIco"
import React from "react"



export default function ResponseBox({goodRequest, text, setRequestBox}: any){

    
    const [opacity, setOpacity] = React.useState(0)

   
    const show = setTimeout(() => {
    
        setOpacity(opacity + 0.1)

    }, 40)

    setInterval(() => clearTimeout(show), 300)
    
    if (goodRequest){

    
        setInterval(() => {
    
            setRequestBox("")
        }, 4000)

    }



    return (


        <div className={responseBoxStyle.responseBox} style={{backgroundColor: (goodRequest ?"#33ff80":"#C41E3A" ) ,
              opacity: opacity}
    }

        >

            <button onClick={() => setRequestBox("")}>
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