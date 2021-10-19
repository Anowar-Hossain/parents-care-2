import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const{id, name,img, title, description} = service;
    return (
       <div className="service p-2">
           <img src={img} alt="" />
           <h2>{name}</h2>
           <h5>{title}</h5>
           <p>{description}</p>
           <Link to={`/details/${id}`}>
           <button className="btn btn-danger">Details</button>
           </Link>
       </div>
    );
};

export default Service;