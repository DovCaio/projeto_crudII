
import Person from "@/model/Person"
import axios from "axios"

export default class Request {

    private url: string = "http://localhost:8080/persons"


    public async post(person: Person){
        
        return await axios.post(this.url, person).then()
            

    }

    public async put(person: any) {
        
        return await axios.put(this.url, person)

    }

    public async delete(id: number){

        axios.delete(this.url + `/${id}`)

    }


    public async getBy(queryType:string, identification: string ) {

        
        return await axios.get(this.url + "/" + queryType + "/" + identification)
            .then()

    }

    




}