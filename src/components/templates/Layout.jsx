import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/global.css"

export default function Layout(props){

    return <Fragment>

        <Header></Header>
        
        {props.children}

        <Footer></Footer>

    </Fragment>

}