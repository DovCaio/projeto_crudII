"use client"
import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import ListTable from "@/components/templates/ListTable"
import personsDivStyle from "@/styles/personsDivStyle.module.css"
import { use, useEffect, useState } from "react"
import Request from "@/functions/Request"

const req = new Request()

export default function Acknowlegdments(){
    const search = useSearchParams()
    const pathname = usePathname() 
    
    const [count, setCount] = useState(0) 
    const [persons, setPersons] = useState([])

    useEffect(() =>{
        const getCount = async () => {

            setCount(await req.getCount())

        }

        const getAllPersons = async () => {

            setPersons(await req.getAll())

        }

        getCount()
        getAllPersons()

    }, [])

    //console.log(search, pathname)

    return (

        <section className={personsDivStyle.section} style={{width:"100vw"}}>

            <header>
                <h2>
                    Persons
                </h2>

                <span>
                    {count}
                </span>
            </header>

            <main >

                <ListTable persons={persons}></ListTable>

            </main>

        </section>

    )

}