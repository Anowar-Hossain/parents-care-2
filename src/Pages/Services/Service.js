import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    const{name,img, title, description} = service;
    return (
       <div className="service p-2">
           <img src={img} alt="" />
           <h2>{name}</h2>
           <h5>{title}</h5>
           <p>{description}</p>
           <button className="btn btn-danger">Details</button>
       </div>
    );
};

export default Service;