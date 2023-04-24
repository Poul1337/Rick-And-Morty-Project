import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const useCorrectData = () => {
  const location = useLocation().pathname;

  return useQuery({
    queryKey: ['correctData'],
    queryFn: () => {
      return axios.get(
        `${import.meta.env.VITE_BASE_URL}${location.slice(0, -1)}`
      );
    },
  });
};

export default useCorrectData;
