import useLogic from '../fetchCorrectData';
const Episodes = () => {
  const data = useLogic();
  console.log(data);
  return <h1>Episodes</h1>;
};

export default Episodes;
