import Person from "@/model/Person"
import PenIco from "@/app/icons/PenIco"
import TrashIco from "@/app/icons/TrashIco"
import deletePerson from "@/functions/DeletePerson"



export default function ListElement({person} : any){
    const id: string = person.id ? person.id.toString() :  " " 

    return (
        
        
        <tr key={id}>

            <td >{id}</td>
            <td >{person.firstName}</td>
            <td >{person.lastName}</td>
            <td >{person.email}</td>
            <td >{person.address.country}</td>
            <td >{person.address.streetAddress}</td>
            <td >{person.address.city}</td>
            <td >{person.address.state}</td>
            <td >{person.address.postalCode}</td>

            <td className="flex flex-row justify-between">
                <button type="button" className="text-green-500 hover:bg-gray-300" onClick={() => update(person)}>
                    <PenIco></PenIco>
                </button>

                <button type="button" className="text-red-300 hover:bg-gray-300" onClick={() => deletePerson(person.id)}>
                    <TrashIco></TrashIco>
                </button>
            </td>

        </tr>

    )


}