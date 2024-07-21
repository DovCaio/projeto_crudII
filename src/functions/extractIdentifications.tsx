import RequestGet from "@/model/RequestGet"


export default function extractIdentification(form: FormData): RequestGet{

    let result: RequestGet = {

        currency: "",
        querySearch: ""

    } 

    const search = Object.fromEntries(form.entries())

    result.currency =  search.currency.valueOf().toString()
    result.querySearch = search.searchInput.toString() 
    

    return result

}