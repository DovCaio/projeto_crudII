"use client"
import searchFildStyle from "@/styles/searchFild.module.css"

import submit from "@/functions/SubmitFormGet"





export default function SearchField ({changePersons, setDisplay, setGoodRequest, setText} :any){

    return (

        <form className={searchFildStyle.searchFild} onSubmit={e => {
            submit(e, changePersons, setDisplay, setGoodRequest, setText)
            }}>

            
            <label htmlFor="searchInput" className="block text-sm font-medium leading-6 text-gray-900">Locate a person</label>
            <div className="flex relative mt-2 rounded-md ">

                <label htmlFor="currency" className="sr-only">Currency</label>
                <select id="currency" name="currency" className="h-9 rounded-md  border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-1/6">
                    <option value="ID">Id</option>
                    <option value="FIRSTNAME">First Name</option>
                    <option value="LASTNAME">Lasts Name</option>
                    <option value="COUNTRY">Country</option>
                </select>
                <input type="text" name="searchInput" id="searchInput" className="block w-2/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder="Search"/>
                <input type="submit" name="search-submit" id="search-submit" value="Find"    
                className="flex w-2/15 ml-2 justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
            </div>
            

        </form>

    )


}