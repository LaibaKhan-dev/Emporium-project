import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../context/addtoCart/context';
import { GlobalContext } from '../../usercontext/context';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { AppRoute } from '../../App';

function CheckoutForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cart_state } = useContext(CartContext);
    const { state } = useContext(GlobalContext);
    const { cart_dispatch } = useContext(CartContext);
    const [customerName, setCustomerName] = useState("");
    const [customerContact, setCustomerContact] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const totalBill = cart_state.cart.reduce((total, item) => total + item.totalPrice, 0);
    const formattedTotalBill = `$${totalBill.toFixed(2)}`;

    const addCheckOut = (e) => {
        e.preventDefault();

        const data = decodeToken(state.token);

        const payload = {
            customerName,
            customerEmail: data.email,
            customerAddress,
            customerContact,
            items: cart_state.cart,
            totalBill,
        };
        console.log(payload);

        axios.post(`${AppRoute}api/create-order`, payload)
            .then((response) => {
                console.log('Order placed successfully:', response.data);
                setShow(false);

                // Clear the cart after successful order placement
                cart_dispatch({ type: 'CLEAR_CART' });
            })
            .catch((error) => {
                console.error('Error placing order:', error);
            });
    };
    




    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                CheckOut
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>CheckOut From Here!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    <form onSubmit={addCheckOut}>


                    <div className="mb-3">
                            <label htmlFor="CustomerName" className="form-label">
                                Customer Name
                            </label>
                            <input
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CustomerName"
                                aria-describedby="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="CustomerAddress" className="form-label">
                                Customer Address
                            </label>
                            <input
                                value={customerAddress}
                                onChange={(e) => setCustomerAddress(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CustomerAddress"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="CustomerContact" className="form-label">
                                Customer Contact
                            </label>
                            <input
                                value={customerContact}
                                onChange={(e) => setCustomerContact(e.target.value)}
                                type="number"
                                className="form-control"
                                id="CustomerContact"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <button type="submit" className="btn btn-info"style={{marginTop: '15px'}}>
                            Checkout
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
            
        </>
    );
}

export default CheckoutForm;
