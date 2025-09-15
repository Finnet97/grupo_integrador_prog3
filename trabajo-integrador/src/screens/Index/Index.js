import React from 'react';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';    
import Header from '../../components/Header/Header';
import './index.css'
function Index(){
    return(
        <React.Fragment>
            <Header/>
            <main>
                <Cards/>
            </main>

            <Footer />
        </React.Fragment>
    )
}

export default Index;