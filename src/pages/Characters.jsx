import useLogic from '../fetchCorrectData';

const Characters = () => {
  const data = useLogic();
  console.log(data);
  return <h1>Characters</h1>;
};

export default Characters;
