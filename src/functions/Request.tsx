
import axios from "axios"

export default class Request {

    private url: string = "http://localhost:8080/persons"

    public post(person: Object){

        axios.post(this.url, person)
            .then(response => {

                console.log(response)

            })
            .catch(err => {

                console.log(err)

            })

    }


}