import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatasetsCard from '../components/DatasetsCard';
import { datasets } from '../data/datasets';
import {TagsColorEnum} from '../modules/Tags';

// Could be used if we want another filtering technique
const checkSubsetArrays = (array1: any, array2: any) => {
  return array1.every((val: any) => array2.includes(val));
}

const animatedComponents = makeAnimated();

// prepare list of tags
const tagList = Object.keys(TagsColorEnum).filter((item) => {
  return isNaN(Number(item));
});

// prepare options for selection
const options = tagList.map((tag) => ({value: tag, label: tag}))

function DatasetsPage() {
  const [selectedOptions, setSelectedOptions] = React.useState();
  const [selectedFilter, setselectedFilter] = React.useState([]);
  
  return (
    <div>
      <Select
      className={"container w-50 mt-5"}
      value={selectedOptions}
      placeholder={"Filter datasets by tags ..."}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={(selection: any) => {
        setSelectedOptions(selection)
        setselectedFilter(selection.map((option: any) => option.value))
      }}
    />
      <div className="mt-5 d-flex flex-row justify-content-around flex-wrap">
        {datasets.filter((dataset) => checkSubsetArrays(selectedFilter, dataset.tags)).map((dataset) => <DatasetsCard key={dataset.id} datasetInfo={dataset} />)}

      </div>
    </div>
  );
}

export default DatasetsPage;
