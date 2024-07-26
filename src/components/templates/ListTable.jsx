"use client"


import listStyle from "@/styles/listStyle.module.css"
import ListTableElement from "./ListTableElement"



export default function ListTable({persons, setPersons}){


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
                    persons.data ? persons.data.map(data => <ListTableElement person={data} setPersons={setPersons} persons={persons}/>) : ""
                }

            </tbody>

        </table>

    )

}