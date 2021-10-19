import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {detailsId} = useParams();
    return (
        <div>
            <h1>Details section{detailsId}</h1>
        </div>
    );
};

export default Details;