import { useQuery } from '@tanstack/react-query';
import style from './Style';
import axios from 'axios';

const SearchResult = ({ open, setOpen, value }) => {
  const { data } = useQuery({
    queryKey: ['details'],
    queryFn: () => {
      return axios.get(
        `${import.meta.env.VITE_BASE_URL}/character/?name=${value}`
      );
    },
  });

  if (open) {
    return console.log(data);
  }
};

export default SearchResult;
