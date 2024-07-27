"use client"
import  { FormEvent, useEffect } from "react"
import toPerson from "./toPerson"
import Request from "./Request"

const req = new Request()

export default function submit(e : FormEvent<HTMLFormElement>, id: string, setResponseBox: Function){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    let person = toPerson(form)
    id ? req.put(person, id, setResponseBox) : req.post(person, setResponseBox)
    //e.currentTarget.reset() now this are in the component CrudSystem
    
}