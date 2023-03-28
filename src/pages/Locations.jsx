import useLogic from '../fetchCorrectData';
const Locations = () => {
  const data = useLogic();
  console.log(data);
  return <h1>Locations</h1>;
};

export default Locations;
