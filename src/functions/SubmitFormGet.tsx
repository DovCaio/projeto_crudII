import { FormEvent } from "react"
import Request from "@/functions/Request"
import extractIdentification from "@/functions/extractIdentifications"
import RequestGet from "@/model/RequestGet"


const req = new Request

export default function submit(e : FormEvent<HTMLFormElement>, changeProps:Function){
    
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const valuesQuery: RequestGet = extractIdentification(form)
    changeProps(req.getBy(valuesQuery.currency, valuesQuery.querySearch))

   
}