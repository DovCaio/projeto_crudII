"use client"


import listStyle from "@/styles/listStyle.module.css"
import ListElement from "./ListElement"



export default function List({persons}){


    return (

        <table className={listStyle.list}>

            <thead>

                <tr>

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
                        Posta Code
                    </th>
                </tr>

            </thead>

            <tbody>

                {
                    persons.data ? persons.data.map(data => <ListElement person={data} />) : ""
                }

            </tbody>

        </table>

    )

}