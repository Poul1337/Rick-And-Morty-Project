import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import mainLogo from './img/mainLogo.png';
import Buttons from './Components/Buttons';
import ThemeSwitch from './Components/ThemeSwitch';

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
    </div>
  );
}

export default App;
