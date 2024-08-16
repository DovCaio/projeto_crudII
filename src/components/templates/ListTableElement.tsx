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

            <td key={`id_${id}`}>{id}</td>
            <td key={`fn_${id}`}>{person.firstName}</td>
            <td key={`ln_${id}`}>{person.lastName}</td>
            <td key={`e_${id}`}>{person.email}</td>
            <td key={`adc_${id}`}>{person.address.country}</td>
            <td key={`ads_${id}`}>{person.address.streetAddress}</td>
            <td key={`adct_${id}`}>{person.address.city}</td>
            <td key={`adst_${id}`}>{person.address.state}</td>
            <td key={`adpc_${id}`}>{person.address.postalCode}</td>

            {renderButtonsEdit()}
        </tr>

    )


}