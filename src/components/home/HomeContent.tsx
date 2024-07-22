import homeContentStyle from "../../styles/homeContent.module.css"

export default function HomeContent (){
    const classNameOfPs = "mt-1 text-x leading-8 text-gray-700"
    return (

        <main className={homeContentStyle.main}>
            
            <div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Our simple CRUD Web app</h2>

                <h3 className="mt-6">What is CRUD?</h3>

                <p className={classNameOfPs}>
                CRUD stands for Create, Read, Update, and Delete.
                These are the basic operations you can perform on data in our app.
                </p>
            </div>
            
            <div className={homeContentStyle.explicatonDiv}>
                
                <h3 className="mt-6">Features</h3>

                <div className={homeContentStyle.explicationElements}>


                    <div className={homeContentStyle.explicationElement}>
                        <h4 className="mt-4">Create</h4>

                        <p className={classNameOfPs}>
                            Easily add new records with our user-friendly form. Enter your data and hit save—it's 
                            that simple
                        </p>

                    </div>

                    <div className={homeContentStyle.explicationElement}>

                        <h4>Read</h4>

                        <p className={classNameOfPs}>
                            View your records in a clean and organized list. Use the search and filters to find exactly
                            what you need.
                        </p>
                    </div>

                    <div className={homeContentStyle.explicationElement}>
                        <h4>Update</h4>
                        <p className={classNameOfPs}>
                            Edit existing records to keep your data current. Quick and straightforward updates ensure 
                            your information is always accurate.
                        </p>
                    </div>

                    <div className={homeContentStyle.explicationElement}>

                        <h4>Delete</h4>

                        <p className={classNameOfPs}>
                            Remove records you no longer need with ease. Our app ensures that deleted data is completely 
                            removed from the system.
                        </p>
                    </div>
                    

                </div>

            </div>


        </main>

    )

}