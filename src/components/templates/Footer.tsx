import footerStyle from "../../styles/footerStyle.module.css"
import Link from "next/link"

export default function Footer(){

    return (
        <footer className={footerStyle.footer}>

            
            <div className={footerStyle.footerConteiner}>

                <div className={footerStyle.divsFooter}>

                    <h3 className={footerStyle.titleFooterElement}>Contact Us</h3>
                    
                    <ul className={footerStyle.Listfooter}>

                        
                        <li>
                            <address>Mail: crudsystemII@myorg.com</address>

                        </li>
                        <li>
                            <span>Phone: 123 423 125</span>

                        </li>
                        
                
                    </ul>
            
                </div>

                


                <div className={footerStyle.divsFooter}>

                    <h3 className={footerStyle.titleFooterElement}>Follow Us</h3>

                    <ul className={footerStyle.Listfooter}>

                        <li>
                            <Link href="https://instagram.com" target="_blank">Instagram</Link>

                        </li>
                        <li>
                            <Link href="https://linkedin.com" target="_blank">Linkedin</Link>

                        </li>
                        <li>
                            <Link href="https://github.com" target="_blank">Github</Link>
                            
                        </li>

                    </ul>


                </div>

                <div className={footerStyle.divsFooter}>

                    <h3 className={footerStyle.titleFooterElement}>About</h3>
                    
                    <p className={footerStyle.p}>
                        This application provides a simple interface for managing data. Easily add, 
                        view, update, and delete records with just a few clicks.
                    </p>

                </div>

                <div className={footerStyle.divsFooter}>

                    <h3 className={footerStyle.titleFooterElement}>Navigation</h3>

                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/crudsystem">Crud system</Link>
                        </li>
                        <li>
                            <Link href="/acknowledgements">Acknowlegdments</Link>
                        </li>
                    </ul>

                </div>

            </div>

            

                <div className={footerStyle.rights}>
                    <hr className={footerStyle.hr}/>
                    <p>&copy; 2024 Simple CRUD APP. All rights reserved.</p>
                    <p>Design and developed by Caio Jhonatan Alves Pereira</p>
                </div>

         
            
        </footer>
    )

}