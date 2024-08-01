


export default function ListTableElementForGetAll({person}:any){

    return (


        <tr>

            <td >{person.id}</td>
            <td >{person.firstName}</td>
            <td >{person.lastName}</td>
            <td >{person.email}</td>
            <td >{person.address?.country}</td>
            <td >{person.address?.streetAddress}</td>
            <td >{person.address?.city}</td>
            <td >{person.address?.state}</td>
            <td >{person.address?.postalCode}</td>

        </tr>

    )

}