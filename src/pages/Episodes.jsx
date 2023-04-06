import useLogic from '../fetchCorrectData';
import CollapsibleTable from '../Components/CollapsibleTable';

const Episodes = () => {
  const data = useLogic();
  return (
    <h1>
      <CollapsibleTable
        data={data}
        firstTh="Name"
        secondTh="Air date"
        thirdTh="Episode"
        name="name"
        status="air_date"
        species="episode"
        firstDetail="Created"
        firstDetailResult="created"
      />
    </h1>
  );
};

export default Episodes;
