import listStyle from "@/styles/listStyle.module.css"
import ListTableElementForGetAll from "./ListTableElementForGetAll"


export default function TableForAll({persons}: any){


    return (

    <table className={listStyle.list} style={{width: "100vw"}}>



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

                
            </tr>

        </thead>

        <tbody>

            {

                persons.map((data: any) => {

                    return <ListTableElementForGetAll key={`element_all_${data.id}`} person={data}/>

                })

            }

        </tbody>
    </table>

    )


}