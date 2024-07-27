
import Person from "@/model/Person"
import axios from "axios"

import ResponseBox from "@/components/templates/ResponseBox"

export default class Request {

    private url: string = "http://localhost:8080/persons"


    public async post(person: Person, setRequestBox: Function){
        
        return await axios.post(this.url, person)
                        .then((response) =>{

                            setRequestBox(
                                <ResponseBox text={response.status} goodRequest={true} setRequestBox={setRequestBox}/>
                            )

                        })
                        .catch((err) => {

                            setRequestBox(
                                <ResponseBox text={err.message} goodRequest={false} setRequestBox={setRequestBox}/>
                            )

                        })
                        

    }

    public async put(person: Person, id: string) { 
        console.log(this.url + `/${id}`, person)
        return await axios.put(this.url + `/${id}`, person).then()

    }

    public async delete(id: number){
        
        axios.delete(this.url + `/${id}`)

    }


    public async getBy(queryType:string, identification: string ) {

        
        return await axios.get(this.url + "/" + queryType + "/" + identification)
            .then()

    }

    




}