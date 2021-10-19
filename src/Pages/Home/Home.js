import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div
            style={{
                background: `url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                // backgroundSize: "cover",
                width: "100%",
                height: "100%"
              }}>
             <Container>
                 <div
                    style={{ height: "90vh" }}
                    className="d-flex justify-content-center align-items-center">       
                <div className="text-center my-5 py-5">
                <h1 className="text-primary fw-bolder fs-1">Online Doctors Service</h1>
                <p className="text-warning">Where can I talk to a doctor online?
                <br />
                HOW TO CONSULT A DOCTOR ONLINE VIA TEXT/AUDIO/VIDEO?</p>
                <ul className="text-danger">
                    <li>Choose the doctor.</li>
                    <li>Book a slot.</li>
                    <li>Make payment.</li>
                    <li>Be present in the consult room on apollo247.com at the time of consult.</li>
                </ul>
                </div>
                 </div>
             </Container>
            </div>
        </div>
    );
};

export default Home;