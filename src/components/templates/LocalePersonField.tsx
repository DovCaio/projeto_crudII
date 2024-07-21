"use clint"
import SearchField from "./SearchField"
import localePersonFieldStyle from "@/styles/localePersonFieldStyle.module.css"
import List from "@/components/templates/List"
import React from "react"
import Person from "@/model/Person"

export default function LocalePersonField(){

    const personArray:[Person] = [
        {
            id: undefined,
        firstName: "",
        lastName: "",
        email: "",
        address: {

            contry: "",
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

            <List persons={persons}/>

            

        </div>

    )

}