import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatasetsCard from '../components/DatasetsCard';
import { datasets } from '../data/datasets';
import { TagsColorEnum, ColorToCategory } from '../modules/Tags';
const animatedComponents = makeAnimated();

// Could be used if we want another filtering technique
const checkSubsetArrays = (array1: any, array2: any) => {
  return array1.every((val: any) => array2.includes(val));
}

// get list of categories of tags
const categoryList = Object.values(ColorToCategory).filter((item) => {
  return isNaN(Number(item));
});

const colorList = Object.keys(ColorToCategory).filter((item) => {
  return isNaN(Number(item));
});

// prepare list of tags
const tagList = Object.keys(TagsColorEnum).filter((item) => {
  return isNaN(Number(item));
});

// prepare options for selection (could be optimized in the future)
const options = categoryList.map((cat): {label: string, options: any[]} => ({label: cat, options: []}));
tagList.forEach((tag) => {
  colorList.forEach((color) => {
    if (TagsColorEnum[tag as keyof typeof TagsColorEnum] === color) {
      const cat = ColorToCategory[color as keyof typeof ColorToCategory];
      options.forEach((optionCat) => {
        if (optionCat.label === cat) {
          optionCat.options.push({ value: tag, label: tag })
        }
      })
    }
  })
})
//const options = tagList.map((tag) => ({ value: tag, label: tag }))

function DatasetsPage() {
  console.log(options)
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
      <div className="mt-5 ms-3 me-3 row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-4">
        {datasets.filter((dataset) => checkSubsetArrays(selectedFilter, dataset.tags)).map((dataset) => <DatasetsCard key={dataset.id} datasetInfo={dataset} />)}
      </div>
    </div>
  );
}

export default DatasetsPage;
