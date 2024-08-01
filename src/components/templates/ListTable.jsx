"use client"


import listStyle from "@/styles/listStyle.module.css"
import ListTableElement from "./ListTableElement"




export default function ListTable({persons, setPersons, setId, setFirstName, setLastName, 
    setEmail,  setCountry, setStreetAddress, setCity,
     setState, setPostalCode, setDisplay, setGoodRequest, setText}){

    
        

    return (

        <table className={listStyle.list} key={"Table"}>

            <thead key={"thead"}>

                <tr key="headOfTable">

                    <th key={"id"}>
                        Id
                    </th>

                    <th key={"firstName"}>
                        Fist Name
                    </th>
                    <th key={"lastName"}>
                        Last Name
                    </th>
                    <th key={"email"}>
                        Email
                    </th>
                    <th key={"country"}>
                        Contry
                    </th>

                    <th key={"streetAddress"}>
                        Street Address
                    </th>

                    <th key={"city"}>
                        City
                    </th>

                    <th key={"state"}>
                        State
                    </th>

                    <th key={"postaCode"}>
                        Postal Code
                    </th>
                    <th key={"edit"}>
                        Edit
                    </th>
                    
                </tr>

            </thead>

            <tbody key={"tbody"}>

                {
                    
                    persons && persons.data && persons.data[0] ? persons.data.map(data => 
                    <ListTableElement person={data} setPersons={setPersons} persons={persons}
                        setId={setId}
                        setFirstName={setFirstName}  setLastName={setLastName}
                        setEmail={setEmail}  setCountry={setCountry}
                        setStreetAddress={setStreetAddress}
                        setCity={setCity}  setState={setState}
                        setPostalCode={setPostalCode}
                        setDisplay={setDisplay}

                    />) : ""
                }

            </tbody>

        </table>

    )

}