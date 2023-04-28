
import CollapsibleTable from '../Components/table/CollapsibleTable';
import React, { useState, useEffect } from 'react';
import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';


const Characters = () => {
  const { data, isLoading } = useLogic();
  const [charactersData, setCharactersData] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return 


  useEffect(() => {
    setCharactersData(data);
  }, [data]);

  

  const handleDeleteRow = (e) => {
    const parent = e.target.parentElement.parentElement.id
    const newData = charactersData.filter((row) => {
      return parseInt(row.id) !== parseInt(parent);
    });
      const updatedData = newData.map((row, i) => ({...row, id: i + 1 }));
    
    setCharactersData(updatedData);
  }



  const handleDeleteSelectedRows = () => {
    const finalData = charactersData.filter(e => {
      console.log(typeof selectedIndexes[0],'selected') 

      return !selectedIndexes.includes(e.id);
    });
    setCharactersData(finalData);
  };

  const getChecked = (e) => {
    const parent = e.target.value
    console.log(parent,'parent')
    setSelectedIndexes(prevIndexes => {
      if (prevIndexes.includes(parent)) {
        return prevIndexes.filter(index => index !== parent);
      } else {
        return [...prevIndexes, parseInt(parent)];
      }
    });
  


  return (
    <h1>
      <CollapsibleTable
        data={charactersData}
        handleDeleteRow={handleDeleteRow}
        handleDeleteSelectedRows={handleDeleteSelectedRows}
        getChecked={getChecked}
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
}}
export default Characters;


