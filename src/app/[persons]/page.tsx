"use server"


import personsDivStyle from "@/styles/personsDivStyle.module.css"

import Request from "@/functions/Request"

import TableForAll from "@/components/persons/TableForAll"

const req = new Request()




export default async function Persons(){


    const datas = await req.getAll()
    const qttPersons = await req.getCount()

    
    return (

        <section className={personsDivStyle.section} style={{width:"100vw", minHeight:"54vh"}}>

            <header>
                <h2>
                    Persons
                </h2>

                <span>
                    {qttPersons}
                </span>
            </header>

            <main >
                

                {
                   <TableForAll persons={datas}/>
                }

            </main>

        </section>

    )

}