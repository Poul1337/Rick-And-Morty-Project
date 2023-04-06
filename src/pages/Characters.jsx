import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable';

const Characters = () => {
  const data = useLogic();
  return (
    <h1>
      <CollapsibleTable
        data={data}
        firstTh="Name"
        secondTh="Status"
        thirdTh="Species"
        name="name"
        status="status"
        species="species"
        firstDetail="Gender"
        secondDetail="Created"
        firstDetailResult="gender"
        secondDetailResult="created"
      />
    </h1>
  );
};

export default Characters;
