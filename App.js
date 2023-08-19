import { useEffect, useState } from 'react';
import Weather from './src/components/Weather';
import Loading from './src/components/Loading';

import * as Location from 'expo-location';

function App() {
  const [weatherData, setWeatherData] = useState({});
  

  

  useEffect(() => {

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      let foundLocation = await Location.getCurrentPositionAsync();
      
      
      
      setTimeout(() => {
        fetch(`http://172.16.1.63:19001/current`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
  
          body: JSON.stringify({
            lat: foundLocation.coords.latitude,
            lon: foundLocation.coords.longitude
     
            
          })
        })
        .then((res) => res.json())
        .then((json) => {
    
          setWeatherData(json);
        });
      }, 3000)
    })();

    

    
    


  }, []);

  return (
    
    <>
      {Object.keys(weatherData).length !== 0 ? <Weather data={weatherData}/> : <Loading/>}
    </>
  );
}





export default App;