import Request from "./Request"
const req = new Request()

export default function deletePerson(id:number, setResponseBox: Function){

    req.delete(id, setResponseBox)


}