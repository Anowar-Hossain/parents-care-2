import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="">
            <div className="row ">
                <div className="footer mb-2">
                    <div className="col-md-3">
                        <i className="fas fa-truck-moving"></i>
                        <h6><small>Quick delover</small></h6>
                        <p>Deleivery is so fast</p>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-money-check-alt"></i>
                        <h6><small>Pay With Easy</small></h6>
                        <p>Pament in very easy</p>
                    </div>
                    <div className="col-md-3"> 
                         <i className="fas fa-heartbeat"></i>
                        <h6><small>Best Deal</small></h6>
                        <p>love to all customer</p>
                    </div>
                    <div className="col-md-3"> 
                         <i className="fas fa-lock"></i>
                        <h6><small>Secured Pament</small></h6>
                        <p>Customer pament secured</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;