import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const fetchCorrectData = () => {
  const location = useLocation().pathname;

  const { data } = useQuery('correctData', () => {
    console.log(location);
    return axios.get(
      `${import.meta.env.VITE_BASE_URL}${location.slice(0, -1)}`
    );
  });

  return data?.data?.results;
};
export default fetchCorrectData;
