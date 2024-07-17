
import axios from "axios"

export default class Request {

    private url: string = "http://localhost:8080/persons"

    public async post(person: Object){
        let result

        await axios.post(this.url, person)
            .then(response => {

                result = response

            })
            .catch(err => {

                throw err

            })

        return result

    }

    public async put(person: Object){
        let result

        axios.put(this.url, person)
            .then(response => {

                result = response

            })
            .catch(err => {


                throw err

            })

        return result

    }


}