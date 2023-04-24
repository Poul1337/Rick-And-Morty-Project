import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';

const Characters = () => {
  const { data, isLoading } = useLogic();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <CollapsibleTable
      data={data?.data?.results}
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
  );
};

export default Characters;
