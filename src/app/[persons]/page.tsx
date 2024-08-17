"use server"


import personsDivStyle from "@/styles/personsDivStyle.module.css"

import Request from "@/functions/Request"

import TableForAll from "@/components/persons/TableForAll"

const req = new Request()




export default async function Persons(){


    
    //console.log(search, pathname)

    const data = await req.getAll()
    
    return (

        <section className={personsDivStyle.section} style={{width:"100vw", minHeight:"54vh"}}>

            <header>
                <h2>
                    Persons
                </h2>

                <span>
                    {await req.getCount()}
                </span>
            </header>

            <main >
                

                {
                   <TableForAll persons={data}/>
                }

            </main>

        </section>

    )

}