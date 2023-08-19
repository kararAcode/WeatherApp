import { useEffect, useState } from 'react';
import Weather from './src/components/Weather';
import Loading from './src/components/Loading';

function App() {
  const [weatherData, setWeatherData] = useState({});

  

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/current", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((res) => res.json())
      .then((json) => {
  
        setWeatherData(json);
      });
    }, 3000)
    


  }, []);

  return (
    
    <>
      {Object.keys(weatherData).length !== 0 && <Weather data={weatherData}/>}
      {Object.keys(weatherData).length === 0 && <Loading/>}
    </>
  );
}



export default App;