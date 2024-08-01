import Request from "./Request"
const req = new Request()

export default function deletePerson(
    id:number, setDisplay: Function, setGoodRequest: Function, setText: Function
){

    req.delete(id, setDisplay, setGoodRequest, setText)


}