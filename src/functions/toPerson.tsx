import Person from "@/model/Person"


export default function toPerson(form: FormData): Person{


    let result : Person  = {
        id: undefined,
        firstName: "",
        lastName: "",
        email: "",
        address: {
            country: "",
            city: "",
            streetAddress: "",
            state: "",
            postalCode: ""
        }
    }
    
    let iterator = form.entries()
    
    let i  = 0
    
    while(true){
        let actual = iterator.next()
        if(!actual.value) break   
        
        if (i < 3){
    
            result[actual.value[0] as keyof Object] = actual.value[1]
            i++;
            
        }else{
            
                 
            result.address[actual.value[0] as keyof Object] = actual.value[1]
                
        }
                
        
    }

    console.log(result)
    
    return result as Person

}