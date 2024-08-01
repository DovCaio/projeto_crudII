import { FormEvent } from "react"
import Request from "@/functions/Request"
import extractIdentification from "@/functions/extractIdentifications"
import RequestGet from "@/model/RequestGet"


const req = new Request

export default async function submit(
    e : FormEvent<HTMLFormElement>, changePersons:Function, setDisplay: Function, setGoodRequest:Function,
    setText:Function
){
    
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const valuesQuery: RequestGet = extractIdentification(form)
    changePersons(await req.getBy(valuesQuery.currency, valuesQuery.querySearch, setDisplay, setGoodRequest, setText))

   
}