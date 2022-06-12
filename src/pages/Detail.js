import { useParams} from 'react-router-dom';
import React from 'react';

const Detail = () => {
    const params = useParams();
    console.log(params);
    return <h1>Detail Pages</h1>
}

export default Detail;
