import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NotFound(){
    return(
        <React.Fragment>
            <Header/>
            <h1>Error404 - No se encontro la pagina</h1>
            <Footer />
        </React.Fragment>
    )
}

export default NotFound;