import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';

const Locations = () => {
  const { data, isLoading } = useLogic();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <CollapsibleTable
      data={data?.data?.results}
      firstTh="Name"
      secondTh="Type"
      thirdTh="Dimension"
      name="name"
      status="type"
      species="dimension"
      firstDetail="Created"
      firstDetailResult="created"
    />
  );
};

export default Locations;
