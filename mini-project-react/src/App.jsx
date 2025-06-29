import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
function App() {
  
  return (
    <>
      {/* <h1>Material UI Demo</h1> */}
      {/* <Button variant="contained"onClick={handleClick}>Click me</Button> */}
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>
    </>
  );
}

export default App
