import React, { useState, useRef, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import './OrderModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OrderHeader from './OrderHeader';
import Extras from './Extras/Extras';   
  
import Comments from './Comments/Comments';
import Footer from './Footer/Footer';

import * as mutations from '../../../graphql/mutations';

import * as localQueries from '../../../local-state/queries';

function OrderModal({ item, handleClose }) {

    const [selectedExtras, setSelectedExtras] = useState([]);

    const [comments, setComments] = useState('');

    const [commentsCharCount, setCommentsCharCount] = useState(0);

    const [quantity, setQuantity] = useState(Number.parseInt(1));

    useEffect(() => {
        
        document.addEventListener('click', handleClick, false);
        

        return () => {

            document.removeEventListener('click', handleClick, false);
            

        };

    }, []);
    

    const outerDiv = useRef(); // LO USAREMOS PARA DETECTAR CLICK FUERA DEL CONTENEDOR Y CERRAR EL MODAL

    const [addCartLine] = useMutation(mutations.ADD_CART_LINE);

    const [addExtrasToCart] = useMutation(mutations.ADD_MANY_EXTRAS_TO_CART);

    const { data: { userState }} = useQuery(localQueries.GET_USER_STATE);
    
    const addExtra = (extra) => {

        setSelectedExtras([...selectedExtras, extra]);

    };

    const removeExtra = (extra) => {

        const newExtras = selectedExtras.filter(item => {

            return item.id.toString() !== extra.id.toString();

        });

        setSelectedExtras(newExtras);

    };

    const handleSelectedExtra = (extra, selected) => {

        if (selected) {

            addExtra(extra);

        } else {

            removeExtra(extra);

        }

    };

    const handleChageComments = (comments) => {

            setComments(comments);

            setCommentsCharCount(Number.parseInt(comments.length));

    };

    const handleChangeQuantity = (qty) => {

        setQuantity(Number.parseInt(qty));

    };

    const calculateExtrasTotal = () => {

        if (selectedExtras.length > 0) {

            const total = selectedExtras.reduce((acc, item) => {

                return acc + item.price;

            }, 0);

            return total;

        } else {

            return 0;

        }

    };

    const calculateTotal = () => {

        const total = (item.price + calculateExtrasTotal()) * quantity;

        return total;

    };

    const handleClick = (e) => {

        if (outerDiv.current.contains(e.target)) {

            return;

        }

       handleClickOutside(e);

    };

    const handleClickOutside= (e) => {

        e.preventDefault();

        handleClose();

    };


    const handleOrderClick = async () => {
        
        const cartLine = await addCartLine({
            variables: {
                input: {
                    userId: userState.loggedUser.id,
                    itemId: item.id,
                    quantity,
                    comments
                }
            },
            refetchQueries: ["GetCart","GetCartTotals"]
        });

        console.log('cartLine', cartLine);

        if (cartLine) {

            const cartLineId = cartLine.data.addCartLine.cartLine.id;

            if (selectedExtras.length > 0) {

                console.log('ESTOY AQUI');

                console.log('selectedExtras', selectedExtras);

                const idArray = selectedExtras.map(item => {

                    return item.id;
                });

                await addExtrasToCart({
                    variables: {
                        cartLineId,
                        extrasIdArray: idArray
                    },
                    refetchQueries: ["GetCart","GetCartTotals"]
                });

            }

        }

        handleClose();

    };


    return (
        <div id="order-modal-container" ref={outerDiv}>
            <span id="order-modal-close-button" onClick={(e) => handleClose()}><FontAwesomeIcon icon="window-close" size="lg" /></span>
            <OrderHeader item={item} />
            <div className="order-modal-separator" />
            <Extras itemId={item.id} handleSelectedExtra={handleSelectedExtra} />
            <div className="order-modal-separator" />
            <Comments handleChangeComments={handleChageComments} commentsValue={comments} commentsCharCount={commentsCharCount} />
            <Footer quantity={quantity} handleChangeQuantity={handleChangeQuantity} total={ calculateTotal() } handleOrderClick={handleOrderClick} />
        </div>
    );
}

export default OrderModal;
