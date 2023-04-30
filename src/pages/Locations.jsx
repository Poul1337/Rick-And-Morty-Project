import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';
import React, { useState, useEffect } from 'react';


const Locations = () => {
  const { data, isLoading } = useLogic();
  const [locationsData, setLocationsData] = useState([data?.data?.results]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);


  if (isLoading) {
    return <LoadingSpinner />;
  }
  useEffect(() => {
    setLocationsData(data?.data?.results);
  }, [data?.data?.results]);


  const handleDeleteRow = (e) => {
    const parent = e.target.parentElement.parentElement.id
    const newData = locationsData.filter((row) => {
      return parseInt(row.id) !== parseInt(parent);
    });
      const updatedData = newData.map((row, i) => ({...row, id: i + 1 }));
    
    setLocationsData(updatedData);
  };

  const handleDeleteSelectedRows = () => {
    const finalData = locationsData.filter(e => {

      return !selectedIndexes.includes(e.id);
    });
    setLocationsData(finalData);
  };

  const getChecked = (e) => {
    const parent = e.target.value
    setSelectedIndexes(prevIndexes => {
      if (prevIndexes.includes(parent)) {
        return prevIndexes.filter(index => index !== parent);
      } else {
        return [...prevIndexes, parseInt(parent)];
      }
    });
  }
  return (
    <h1>
      <CollapsibleTable
           data={locationsData}
           handleDeleteRow={handleDeleteRow}
           handleDeleteSelectedRows={handleDeleteSelectedRows}
           getChecked={getChecked}
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
