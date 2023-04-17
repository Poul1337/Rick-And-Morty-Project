import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const fetchCorrectData = () => {
  const location = useLocation().pathname;

  const { data, isLoading } = useQuery('correctData', () => {
    return axios.get(
      `${import.meta.env.VITE_BASE_URL}${location.slice(0, -1)}`
    );
  });

  return [data?.data, isLoading];
};
export default fetchCorrectData;
