import Person from "@/model/Person"


export default function toPerson(form: FormData): Object{

    
    let result : Person = {

        firstName: "",
        lastName: "",
        email: "",
        address: {

            contry: "",
            streetAddress: "",
            city: "",
            state: "",
            postalCode: ""

        }

    }
    
    let iterator = form.entries()
    let done : boolean = false
    let i  = 0
    while(true){
        let actual = iterator.next()
        done = actual.done as boolean
        if (done) break;
        
        if (i < 3){
    
            result[actual.value[0] as keyof Object] = actual.value[1]
            i++;
            
        }else{
                
            result.address[actual.value[0] as keyof Object] = actual.value[1]
                
        }
                
        
    }
    
    return result

}