import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {detailsId} = useParams();
    const [details, setDetails] = useState([]);
    // const[detail, setDetail] = useState([]);
    useEffect(()=> {
        fetch('/detailsdata.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[]);
    
    const newDetail=details.find(d=>d.id == detailsId);
    console.log(newDetail);
    // setDetail(newDetail);
    

   
    return (
        <div style={{marginBottom:"30px"}}>
            <h2 className="text-danger">Doctor Details</h2>
            <div className="row mt-5">
                <div className="col-md-6">
                <img className="w-75"src={newDetail?.img} alt="" />
                </div>
                <div className="col-md-6">
                  <h3>{newDetail?.name}</h3>
                  <h4>{newDetail?.title}</h4>
                  <p><small>{newDetail?.details}</small></p>
                  <h2>Fees: {newDetail?.Fees}</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Details;;