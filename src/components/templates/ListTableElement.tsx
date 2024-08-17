import Person from "@/model/Person"
import PenIco from "@/app/icons/PenIco"
import TrashIco from "@/app/icons/TrashIco"
import deletePerson from "@/functions/DeletePerson"


function changeInputsValues(setId:any, setFirstName:any, setLastName:any, setEmail:any, setCountry:any, 
    setStreetAddress:any, setCity:any, setState:any, setPostalCode:any, person: any
){

    setId(person.id)
    setFirstName(person.firstName)
    setLastName(person.lastName)
    setEmail(person.email)
    setCountry(person.address.country)
    setStreetAddress(person.address.streetAddress)
    setCity(person.address.city)
    setState(person.address.state)
    setPostalCode(person.address.postalCode)
    

}



export default function ListTableElement({person, persons, setPersons, setId, setFirstName, setLastName, 
    setEmail,  setCountry, setStreetAddress, setCity,
     setState, setPostalCode, setDisplay, setGoodRequest, setText } : any ){
    const id: string = person.id ? person.id.toString() :  " " 

    
    function renderButtonsEdit(){


        return <td className="flex flex-row justify-between" key={`btns_${id}`}>
                    <button key={`bnte_${id}`} type="button" className="text-green-500 hover:bg-gray-300" onClick={() => {
                        
                        changeInputsValues(setId, setFirstName, setLastName, setEmail, setCountry, setStreetAddress,
                            setCity, setState, setPostalCode, person
                        )
                        
                        scrollTo(0,0)
                        
                        }
                        
                        }>
                        <PenIco></PenIco>
                    </button>
    
                    <button key={`bntr_${id}`} type="button" className="text-red-300 hover:bg-gray-300" onClick={() => {
                        deletePerson(person.id, setDisplay, setGoodRequest, setText)
                        const index = persons.data.indexOf(person)
                        setPersons(persons.data.splice(index, 1))
    
                    }}>
                        <TrashIco></TrashIco>
                    </button>
                </td>
    
        
    }


    return (
        
        
        <tr key={id}>

            <td>{id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.address.country}</td>
            <td>{person.address.streetAddress}</td>
            <td>{person.address.city}</td>
            <td>{person.address.state}</td>
            <td>{person.address.postalCode}</td>

            {renderButtonsEdit()}
        </tr>

    )


}