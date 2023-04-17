import RingLoader from 'react-spinners/RingLoader';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <RingLoader color={'#52CAD2'} size={250} />
    </div>
  );
};

export default LoadingSpinner;
