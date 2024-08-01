"use client"
import  { FormEvent, useEffect } from "react"
import toPerson from "./toPerson"
import Request from "./Request"

const req = new Request()

export default function submit(
    e : FormEvent<HTMLFormElement>, id: string, setDisplay: Function, setGoodRequest:Function,
    setText:Function

){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    let person = toPerson(form)
    id ? req.put(person, id, setDisplay, setGoodRequest, setText) : 
        req.post(person, setDisplay, setGoodRequest, setText)
    //e.currentTarget.reset() now this are in the component CrudSystem
    
}