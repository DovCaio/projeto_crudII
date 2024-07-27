"use client"
import crudSysteStyle from "../../styles/crudSystemStyle.module.css"
import LocalePersonField from "../templates/LocalePersonField";
import submit from "@/functions/SubmitFormPost";
import React from "react";


function newOnchange(e: React.FormEvent<HTMLInputElement>, set : Function) {

    e.preventDefault()
    set(e.currentTarget.value)
    

}

function select(e: React.FormEvent<HTMLSelectElement>, set: Function) {

    e.preventDefault()
    set(e.currentTarget.value)

}


export default function CrudSystem() {
    const [id, setId] = React.useState("")
    const [firstName, setFirstName] = React.useState("") 
    const [lastName, setLastName] = React.useState("") 
    const [email, setEmail] = React.useState("") 
    const [country, setCountry] = React.useState("") 
    const [streetAddress, setStreetAddress] = React.useState("") 
    const [city, setCity] = React.useState("") 
    const [state, setState] = React.useState("") 
    const [postalCode, setPostalCode] = React.useState("") 

    function resetAll(
    ){
        setId("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setCountry("")
        setCity("")
        setStreetAddress("")
        setState("")
        setPostalCode("")
    
    
    }
    

    return( 
        <main>
            
            <form className={crudSysteStyle.form} onSubmit={e => {
                submit(e, id) 
                resetAll()
                }} onReset={e => {

                    resetAll()

                }}>
                    <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={e => newOnchange(e, setFirstName)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={e => newOnchange(e, setLastName)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={e => newOnchange(e, setEmail)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={country}
                        onChange={e => select(e, setCountry)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        </select>
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                        id="streetAddress"
                        name="streetAddress"
                        type="text"
                        autoComplete="street-address"
                        value={streetAddress}
                        onChange={e => newOnchange(e, setStreetAddress)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        value={city}
                        onChange={e => newOnchange(e, setCity)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        value={state}
                        onChange={e => newOnchange(e, setState)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-2">
                    <label htmlFor="postaCode" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                        id="postaCode"
                        name="postaCode"
                        type="text"
                        autoComplete="postal-code"
                        value={postalCode}
                        onChange={e => newOnchange(e, setPostalCode)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <input type="submit" value="Submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                    <input type="reset" value="Cancel"  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                </div>
                </div>

                
            </form>

            <LocalePersonField
                setId={setId}
                setFirstName={setFirstName}  setLastName={setLastName}
                 setEmail={setEmail}  setCountry={setCountry}
                 setStreetAddress={setStreetAddress}
                 setCity={setCity}  setState={setState}
                 setPostalCode={setPostalCode}

            />

    </main>
    )
}