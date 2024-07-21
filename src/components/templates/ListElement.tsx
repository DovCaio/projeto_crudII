import Person from "@/model/Person"

export default function ListElement({person} : any){
    const id: string = person.id ? person.id.toString() :  " " 

    return (
        

        <tr>

            <td>{id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.address.contry}</td>
            <td>{person.address.streetAddress}</td>
            <td>{person.address.city}</td>
            <td>{person.address.state}</td>
            <td>{person.address.postalCode}</td>

            <button accessKey={id}></button>

        </tr>

    )


}