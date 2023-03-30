import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router';
import { Characters, Episodes, Home, Locations } from './pages';

function App() {
  const { data } = useQuery('BaseUrlFetch', () => {
    return axios.get(import.meta.env.VITE_BASE_URL);
  });

  return (
    <div>
      <NavBar data={data?.data} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
