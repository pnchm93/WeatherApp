import { styled } from "styled-components";
import CityComponent from "./Components/CityComponent";
import Weathercomponent from "./Components/Weathercomponenet";
import { useState } from "react";
import axios from "axios";
import Error from "./Components/Error";
const API_KEY = "f1079712e1a91ef7b1a080ceb98006d5";


export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/fog.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const Applevel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updatecity] = useState();
  const [weather, updateweather] = useState();
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchweather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      console.log(response);
      setErrorMsg(null)
      updateweather(response.data);
    } catch (e) {
      setErrorMsg("City Name Not Found.....!")
    }
  }

  return (
    <Container>
      <Applevel>React weather app</Applevel>
      {weather ? (
        <Weathercomponent weather={weather} />
      ) : errorMsg ? (
        <Error message={errorMsg} />
        ) : (
        <CityComponent updatecity={updatecity} fetchweather={fetchweather} />
      )}
    </Container>
  )

}

export default App;
