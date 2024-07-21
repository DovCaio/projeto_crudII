"use client"
import  { FormEvent, useEffect } from "react"
import toPerson from "./toPerson"
import Request from "./Request"

const req = new Request()

export default function submit(e : FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    let person = toPerson(form)
    req.post(person)
    e.currentTarget.reset()
    
}