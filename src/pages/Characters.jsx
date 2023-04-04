import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable'
import fetchCorrectData from '../fetchCorrectData'





const Characters = () => {
  const data = useLogic();
  return (
  <h1>
   <CollapsibleTable 
  firstTh='Name' 
  secondTh='Status' 
  thirdTh='Species' 
  url="https://rickandmortyapi.com/api/character"
  name="name"
  status="status"
  species="species"
  firstDetail="Gender"
  secondDetail="Created"
  firstDetailResult="gender"
  secondDetailResult="created"

  />
  </h1>
  )
};


export default Characters;
