import React, { useState } from 'react';
import './OrderModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OrderHeader from './OrderHeader';
import Extras from './Extras/Extras';   
  
import Comments from './Comments/Comments';
import Footer from './Footer/Footer';


function OrderModal({ item, handleClose }) {

    const [selectedExtras, setSelectedExtras] = useState([]);

    const [comments, setComments] = useState('');

    const addExtraId = (extraId) => {

        setSelectedExtras([...selectedExtras, extraId]);

    };

    const removeExtraId = (extraId) => {

        const newExtras = selectedExtras.filter(id => {

            return id !== extraId;

        });

        setSelectedExtras(newExtras);

    };

    const handleSelectedExtra = (extraId, selected) => {

        if (selected) {

            addExtraId(extraId);

        } else {

            removeExtraId(extraId);

        }

    };

    const handleChageComments = (comments) => {

        setComments(comments);

    };

    return (
        <div id="order-modal-container">
            <span id="order-modal-close-button" onClick={(e) => handleClose()}><FontAwesomeIcon icon="window-close" size="lg" /></span>
            <OrderHeader item={item} />
            <div className="order-modal-separator" />
            <Extras itemId={item.id} handleSelectedExtra={handleSelectedExtra} />
            <div className="order-modal-separator" />
            <Comments handleChangeComments={handleChageComments} commentsValue={comments} />
            <Footer />
        </div>
    );
}

export default OrderModal;
