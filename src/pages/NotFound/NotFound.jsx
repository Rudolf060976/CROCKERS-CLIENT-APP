import React from 'react';

import './NotFound.scss';

import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

import image from '../../assets/images/Fetch_Error.jpg';


function NotFound() {
    return (
        <main className="not-found-container">
            <Header />
            <div className="not-found-content">
                <h1>404 - Not Found</h1>
                <img src={image} alt="404 Not Found" />
            </div>
            <Footer />
        </main>
    );
}

export default NotFound;
