import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {detailsId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=> {
        fetch('/detailsdata.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[]);
    
    useEffect(()=> {
        const myData = details.find((doctor) => doctor.id === detailsId);
        console.log(myData);
    },[details]);

   
    return (
        <div style={{marginBottom:"370px"}}>
            <h1>service: {detailsId}</h1>
            <div className="row">
                <div className="col-md-4">
                
                </div>
                <div className="col-md-8">
                  
                </div>
            </div>
            
        </div>
    );
};

export default Details;;