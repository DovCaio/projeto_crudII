import { FormEvent } from "react"
import Request from "@/functions/Request"
import extractIdentification from "@/functions/extractIdentifications"
import RequestGet from "@/model/RequestGet"


const req = new Request

export default async function submit(e : FormEvent<HTMLFormElement>, changeProps:Function, setResponseBox: Function){
    
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const valuesQuery: RequestGet = extractIdentification(form)
    changeProps(await req.getBy(valuesQuery.currency, valuesQuery.querySearch, setResponseBox))

   
}