"use client"


import listStyle from "@/styles/listStyle.module.css"
import ListTableElement from "./ListTableElement"



export default function ListTable({persons, setPersons, setId, setFirstName, setLastName, 
    setEmail,  setCountry, setStreetAddress, setCity,
     setState, setPostalCode, setResponseBox}){

    
        

    return (

        <table className={listStyle.list} >

            <thead>

                <tr key="headOfTable">

                    <th>
                        Id
                    </th>

                    <th>
                        Fist Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Contry
                    </th>

                    <th>
                        Street Address
                    </th>

                    <th>
                        City
                    </th>

                    <th>
                        State
                    </th>

                    <th>
                        Postal Code
                    </th>

                    <th>
                        Edit
                    </th>
                </tr>

            </thead>

            <tbody>

                {

                    persons && persons.data && persons.data[0] ? persons.data.map(data => 
                    <ListTableElement person={data} setPersons={setPersons} persons={persons}
                        setId={setId}
                        setFirstName={setFirstName}  setLastName={setLastName}
                        setEmail={setEmail}  setCountry={setCountry}
                        setStreetAddress={setStreetAddress}
                        setCity={setCity}  setState={setState}
                        setPostalCode={setPostalCode}
                        setResponseBox={setResponseBox}
                    />) : ""
                }

            </tbody>

        </table>

    )

}