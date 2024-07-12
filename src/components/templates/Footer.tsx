import footerStyle from "../../styles/footerStyle.module.css"
import Link from "next/link"
import Image from 'next/image'
import LinkedinIco from "../../../public/linkedin.svg"
import GitHubIco from "../../../public/github.svg"
import InstagramIco from "../../../public/instagram.svg"

export default function Footer(){

    const icoSizes = {
        width: 18,
        height: 18
    }

    return (
        <footer className={footerStyle.footer}>

            
            <div className={footerStyle.footerConteiner}>

                <div className={footerStyle.divsFooter}>

                    <h3 className={footerStyle.titleFooterElement}>Contact Us</h3>
                    
                    <ul >

                        
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

                    <ul className={footerStyle.contactUsDivFooter}>

                        <li>
                            <Link href="https://instagram.com" target="_blank">
                                <Image
                                    src={InstagramIco}
                                    width={icoSizes.width}
                                    height={icoSizes.height}
                                    alt="instagram logo"
                                />
                            </Link>

                        </li>
                        <li>
                            <Link href="https://linkedin.com" target="_blank">
                                <Image
                                    src={LinkedinIco}
                                    width={icoSizes.width}
                                    height={icoSizes.height}
                                    alt="linkedin logo"
                                />
                            </Link>

                        </li>
                        <li>
                            <Link href="https://github.com" target="_blank">
                                <Image
                                    src={GitHubIco}
                                    width={icoSizes.width}
                                    height={icoSizes.height}
                                    alt="github logo"
                                />
                            </Link>
                            
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
                        <li className={footerStyle.link}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={footerStyle.link}>
                            <Link href="/crudsystem">Crud system</Link>
                        </li>
                        <li className={footerStyle.link}>
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