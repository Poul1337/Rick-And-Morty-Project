import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable';

const Locations = () => {
  const data = useLogic();
  return (
    <h1>
      <CollapsibleTable
        data={data}
        firstTh="Name"
        secondTh="Type"
        thirdTh="Dimension"
        name="name"
        status="type"
        species="dimension"
        firstDetail="Created"
        firstDetailResult="created"
      />
    </h1>
  );
};

export default Locations;
