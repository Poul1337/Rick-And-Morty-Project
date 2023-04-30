import useLogic from '../hooks/UseCorrectData';
import CollapsibleTable from '../Components/table/CollapsibleTable';
import LoadingSpinner from '../Components/table/LoadingSpinner';
import React, { useState, useEffect } from 'react';


const Episodes = () => {
  const { data, isLoading } = useLogic();
  const [episodesData, setEpisodesData] = useState([data?.data?.results]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
    setEpisodesData(data?.data?.results);
  }, [data?.data?.results]);


  const handleDeleteRow = (e) => {
    const parent = e.target.parentElement.parentElement.id
    const newData = episodesData.filter((row) => {
      return parseInt(row.id) !== parseInt(parent);
    });
      const updatedData = newData.map((row, i) => ({...row, id: i + 1 }));
    
    setEpisodesData(updatedData);
  };


  const handleDeleteSelectedRows = () => {
    const finalData = episodesData.filter(e => {

      return !selectedIndexes.includes(e.id);
    });
    setEpisodesData(finalData);
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
           data={episodesData}
           handleDeleteRow={handleDeleteRow}
           handleDeleteSelectedRows={handleDeleteSelectedRows}
           getChecked={getChecked}
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
