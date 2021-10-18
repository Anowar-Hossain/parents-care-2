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
                <h1 className="text-white">Online Doctors Service</h1>
                </div>
                 </div>
             </Container>
            </div>
        </div>
    );
};

export default Home;