import { useState } from 'react';
import styled from 'styled-components'

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityLevel=styled.span`
color: black;
margin: 10px auto;
font-size: 18px;
font-weight: bold;
`;
const CityComponent=(props)=>{
    const {updatecity,fetchweather}=props;
    return(
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <CityLevel>Find weather of your city</CityLevel>
        <SearchBox onSubmit={(fetchweather)}>
        <input placeholder='Enter City Name...' 
        onChange={(e)=>updatecity(e.target.value)}/>
        <button type="submit">Search</button>
        </SearchBox>
        </>
    )
}
export default CityComponent;