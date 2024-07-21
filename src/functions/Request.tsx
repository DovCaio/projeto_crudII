
import Person from "@/model/Person"
import axios from "axios"

export default class Request {

    private url: string = "http://localhost:8080/persons"


    public async post(person: Person){
        let result

        axios.post(this.url, person)
            .then(response => {

                result = response

        })
            

        return result

    }

    public async get(request: string,   id: BigInt | undefined = undefined){



        let result
        await axios[request as keyof Object](this.url + (id ? `/${id}` : ""))
            .then((response: Response) => {

                result = response

        })


        return result
    }

    public async getBy(queryType:string, identification: string ) {

        
        return await axios.get(this.url + "/" + queryType + "/" + identification)
            .then()

    }

    




}