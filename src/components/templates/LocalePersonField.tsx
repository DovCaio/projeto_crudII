"use clint"
import SearchField from "./SearchField"
import localePersonFieldStyle from "@/styles/localePersonFieldStyle.module.css"
import ListTable from "@/components/templates/ListTable"
import React from "react"
import Person from "@/model/Person"


export default function LocalePersonField({setId, setFirstName, setLastName, 
    setEmail,  setCountry, setStreetAddress, setCity,
     setState, setPostalCode} : any){

    const personArray:[Person] = [
        {
            id: undefined,
        firstName: "",
        lastName: "",
        email: "",
        address: {

            country: "",
            streetAddress: "",
            city: "",
            state: "",
            postalCode: ""

        }

    }
    ]
    
    const [persons, setPersons] = React.useState([])        
    



    return (

        <div className={localePersonFieldStyle.localePersonField}>

            <SearchField changePersons={setPersons}/>

            <ListTable persons={persons} setPersons={setPersons}
                setId={setId}
                setFirstName={setFirstName}  setLastName={setLastName}
                setEmail={setEmail}  setCountry={setCountry}
                setStreetAddress={setStreetAddress}
                setCity={setCity}  setState={setState}
                setPostalCode={setPostalCode}
            />

            

        </div>

    )

}