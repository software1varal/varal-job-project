import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import FooterMobileNav from '../../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../../Shared/Navbar/Appbar';
import visa from '../../../asset/visa.png'
import paypal from '../../../asset/paypal.png'
import master from '../../../asset/mastercard.png';
import './PostJob3.css';

const PostJobThree = () => {
    return (
        <div>
        <Appbar/>
        <Container>
            <div className='my-5'>
                <div className='text-start'>
                    <h4>Payment</h4> <br /> <br />
                    <h4>Choose a payment method</h4> <br />
                    <div className='paymentOptions'>
                        <div className='payment-card'>
                            <img src={visa} alt="" />
                        </div>
                        <div className='payment-card'>
                            <img src={paypal} alt="" />
                        </div>
                        <div className='payment-card'>
                            <img src={master} alt="" />
                        </div>
                    </div>
                </div>

                <Row>
                    <Col sm={12} md={5}>
                        <div className='my-5 text-start pe-1 pe-md-5 me-1 me-md-5'>
                            <h5>Billing Info</h5> <br />
                            <span>Name:</span> <br />
                            <input className='billing-input payment-input' type="text" /> <br />
                            <br />
                            <span>Address:</span> <br />
                            <input className='billing-input payment-input' type="text" /> <br /> <br />
                            <div className='zipAndCity'>
                                <div>
                                    <span>City:</span> <br />
                                    <input className='billing-input city' type="text" />
                                </div>
                                <div>
                                    <span>Zip code:</span> <br />
                                    <input className='billing-input city' type="text" />
                                </div>
                            </div> <br />
                            <span>Country</span> <br />
                            <select className='billing-input payment-input' name="" id="">
                                    <option></option>
                                    <option>Abu Dhabi</option>
                                    <option>Oman</option>
                                    <option>Qatar</option>
                                    <option>Saudi Arabia</option>
                                    <option>Egypt</option>
                                    <option>Morocco</option>
                            </select>
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className='my-5 creditCardInfo'>
                            <h5>Credit Card Info</h5> <br />
                            <span>Credit Card Number:</span>
                          
                            <div>
                            <button
                                  className='billing-input me-3'>
                                  343 454 2233 4322
                            </button>
                            <button
                                 className='billing-input visa-button'>
                                 <img src={visa} alt="" />
                            </button> <br /> <br />
                            </div>
                            <h6>Card Holder Name:</h6>
                            <input 
                                className='billing-input'
                                type="text" 
                                defaultValue="Huraira Tariq" 
                                disabled/> <br />
                            <br />
                            
                            <div className='dateAndCvv'>
                                <div>
                                      <h6>Expirary Date</h6>
                                      <input
                                        className='billing-input'
                                        type="date" /> 
                                </div>
                                    
                                <div className='ms-4'>
                                    <h6>CVV:</h6>
                                    <input 
                                      className='billing-input'
                                      type="number" 
                                      defaultValue={167} disabled
                                    /> 
                                </div>
                               
                            </div>

                        </div>
                    </Col>
                </Row>
                <button className='pay-btn'>Pay</button>
            </div>

        </Container>
        <Footer/>
        <FooterMobileNav/>
        </div>
    );
};

export default PostJobThree;