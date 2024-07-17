import { Children } from "react";


export default function List(props: Object){

    return (

        <table>

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

                {props.children}

            </tbody>

        </table>

    )

}