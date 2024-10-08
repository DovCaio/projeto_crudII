"use server"

import ListElement from "@/components/templates/ListTableElement"
import Person from "@/model/Person"
import { revalidateTag } from "next/cache"

export default async function action(persons: Person[]){

    return persons.map(person => <ListElement person={person}/>)

}