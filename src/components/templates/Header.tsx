import headerStyle from "../../styles/headerStyle.module.css"
import Link from "next/link"

export default function Header (){


    return (
        <header className={headerStyle.header} >
        <Link href="/">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">CrudII</h1>

        </Link>
            <nav className={headerStyle.nav}>
                <Link href="/crudsystem" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    Crud System
                </Link>
                <Link href="/persons" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    Persons
                </Link>
            </nav>
</header>
    )

}