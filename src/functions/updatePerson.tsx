import Request from "./Request";

const req = new Request()

export default function updatePerson(person: any){ 

    req.put(person)

}