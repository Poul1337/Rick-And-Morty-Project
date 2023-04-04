import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable'


const Episodes = () => {
  const data = useLogic();
  return <h1><CollapsibleTable 
  firstTh='Name' 
  secondTh='Air date' 
  thirdTh='Episode' 
  url='https://rickandmortyapi.com/api/episode' 
  name="name"
  status="air_date"
  species="episode"
  firstDetail="Created"

  firstDetailResult="created"

  /></h1>;
};

export default Episodes;
