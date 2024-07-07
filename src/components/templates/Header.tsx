import headerStyle from "../../styles/headerStyle.module.css"

export default function Header (){


    return (
        <header className={headerStyle.header} >
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">CrudII</h1>

            <nav className={headerStyle.nav}>
                <a href="#" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    Crud System
                </a>
                <a href="#" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    Acknowlegdments
                </a>
            </nav>
</header>
    )

}