import React from 'react';
import Weather from './components/Weather';
import './App.css';
import Loading from './components/Loading';
import { useEffect,useState } from 'react';
import RingLoader
from "react-spinners/RingLoader";


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 5000);
  }, []);
  return (
    <div className='App'>

      {
                loading ? <RingLoader
                color={"#00646e"} loading={loading} size={150}  /> :  <Weather/>
            }
     
    </div>
  );
};

export default App;