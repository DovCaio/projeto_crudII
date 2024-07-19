import Address from "./Address";


export default interface Person{
    id: Number | undefined;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
}