
import Person from "@/model/Person"
import axios, { AxiosResponse } from "axios"

import ResponseBox from "@/components/templates/ResponseBox"


export default class Request {

    private url: string = "http://localhost:8080/persons"
    
    private sucess(
        setDisplay: Function, setGoodRequest: Function, setText: Function, response: AxiosResponse<any, any>
    ){

        setDisplay("flex")
        setGoodRequest(true)
        setText(response.status)

    }

    private fail(setDisplay: Function, setGoodRequest:Function, setText:Function,  err: any){

        setDisplay("flex")
        setGoodRequest(false)
        setText(err.message)

    }

    public async post(
        person: Person, setDisplay: Function, setGoodRequest:Function, setText: Function
    ){
        
        return await axios.post(this.url, person)
                        .then((response) => this.sucess(setDisplay, setGoodRequest, setText, response))
                        .catch((err) => this.fail(setDisplay, setGoodRequest, setText, err))
                        

    }

    public async put(person: Person, id: string,  setDisplay: Function, setGoodRequest:Function, setText: Function) { 

        return await axios.put(this.url + `/${id}`, person)
            .then((response) => this.sucess(setDisplay, setGoodRequest, setText, response))
            .catch((err) => this.fail(setDisplay, setGoodRequest, setText, err))
        

    }

    public async delete(id: number, setResponseBox: Function){
        
        axios.delete(this.url + `/${id}`)
            .then(response => this.sucess(setResponseBox, response))
            .catch(err => this.fail(setResponseBox, err))

    }


    public async getBy(
        queryType:string, identification: string, setDisplay: Function, setGoodRequest: Function,
        setText: Function
    ) {

        
        return await axios.get(this.url + "/" + queryType + "/" + identification)
            .then(response => {
                console.log(response.data[0])
                if (!response.data[0]){ //IMPLEMENTAR NO BACK, NÂO SEJA ENCONTRADO LANÇAR UM ERRO.
                    this.fail(setDisplay, setGoodRequest, setText, {message: "Not Found"} )
                }
                return response

            })
            .catch(err => this.fail(setDisplay, setGoodRequest, setText, err))

    }

    public async getCount(){

        return await axios.get(this.url + "/totalPersons" ).then( response => {

            return response.data

        })

    }

    public async getAll(){


        return await axios.get(this.url)
                    .then(response => {

                        return response.data

                    })

    }




}