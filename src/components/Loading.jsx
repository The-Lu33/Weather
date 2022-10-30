import React from 'react';
import { useEffect,useState } from 'react';
import RingLoader
from "react-spinners/RingLoader";
const Loading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div>
            {
                loading ? <RingLoader
                color={"#36d7b7"} loading={loading} size={150} /> : null
            }
        </div>
    );
};

export default Loading;