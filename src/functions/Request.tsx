
import Person from "@/model/Person"
import axios, { AxiosResponse } from "axios"

import ResponseBox from "@/components/templates/ResponseBox"


export default class Request {

    private url: string = "http://localhost:8080/persons"
    
    private sucess(setRequestBox: Function, response: AxiosResponse<any, any>){

        setRequestBox(
            <ResponseBox text={response.status} goodRequest={true} setRequestBox={setRequestBox}/>
        )

    }

    private fail(setRequestBox: Function, err: any){

        setRequestBox(
            <ResponseBox text={err.message} goodRequest={false} setRequestBox={setRequestBox}/>
        )

    }

    public async post(person: Person, setRequestBox: Function){
        
        return await axios.post(this.url, person)
                        .then((response) => this.sucess(setRequestBox, response))
                        .catch((err) => this.fail(setRequestBox, err))
                        

    }

    public async put(person: Person, id: string, setRequestBox: Function) { 

        return await axios.put(this.url + `/${id}`, person)
            .then((response) => this.sucess(setRequestBox, response))
            .catch((err) => this.fail(setRequestBox, err))
        

    }

    public async delete(id: number, setResponseBox: Function){
        
        axios.delete(this.url + `/${id}`)
            .then(response => this.sucess(setResponseBox, response))
            .catch(err => this.fail(setResponseBox, err))

    }


    public async getBy(queryType:string, identification: string ) {

        
        return await axios.get(this.url + "/" + queryType + "/" + identification)
            .then()

    }

    




}