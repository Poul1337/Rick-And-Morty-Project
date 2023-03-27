import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import mainLogo from './img/mainLogo.png';
import Buttons from './Components/Buttons';
import ThemeSwitch from './Components/ThemeSwitch';
import CollapsibleTable from './Components/CollapsibleTable';
import React, {useState, useEffect} from 'react'



function App() {
  const { data } = useQuery('BaseUrlFetch', () => {
    return axios.get(import.meta.env.VITE_BASE_URL);
  });
  

  return (
    <div>
      <div className="navBar">
        <img src={mainLogo} alt="Rick and Morty" />
        <Buttons data={data?.data} />
        <ThemeSwitch />
      </div>
      <div>
        <CollapsibleTable/>
      </div>
    </div>
  );
}

export default App;
