import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable'


const Locations = () => {
  const data = useLogic();
  return <h1><CollapsibleTable 
  firstTh='Name' 
  secondTh='Type' 
  thirdTh='Dimension' 
  url='https://rickandmortyapi.com/api/location'
  name="name"
  status="type"
  species="dimension"
  firstDetail="Created"
  firstDetailResult="created"

  /></h1>;
};

export default Locations;
