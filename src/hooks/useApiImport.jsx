import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const useApiImport = () => {
    const [api, setApi] = useState({});
    useEffect(() => {
        const success = (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2681b429c6bb84750cc207467498a47b`
            )
            .then((res) => setApi(res.data));
        };
        navigator.geolocation.getCurrentPosition(success);
      }, []);
    return {api,setApi};
}
export default useApiImport;