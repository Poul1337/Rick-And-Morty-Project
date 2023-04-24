import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';

const Episodes = () => {
  const { data, isLoading } = useLogic();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <CollapsibleTable
      data={data?.data?.results}
      firstTh="Name"
      secondTh="Air date"
      thirdTh="Episode"
      name="name"
      status="air_date"
      species="episode"
      firstDetail="Created"
      firstDetailResult="created"
    />
  );
};

export default Episodes;
