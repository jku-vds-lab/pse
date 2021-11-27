import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatasetsCard from '../components/DatasetsCard';
import { datasets } from '../data/datasets';
import { tagToCategoryEnum, categoryToColorEnum } from '../modules/Tags';

const animatedComponents = makeAnimated();

interface ITagOptions {
  value: string,
  label: string
}

interface ISelectOptions {
  label: string,
  options: ITagOptions[]
}

// check if one array is a subst of another array
const checkSubsetArrays = (array1: string[], array2: string[]) => {
  return array1.every((val: string) => array2.includes(val));
}

// get list of categories of tags
const categoryList = Object.keys(categoryToColorEnum).filter((item) => {
  return isNaN(Number(item));
});

// prepare list of tags
const tagList = Object.keys(tagToCategoryEnum).filter((item) => {
  return isNaN(Number(item));
});

// prepare options for selection
const options = categoryList.map((cat): ISelectOptions => {
  // get all tags that have this category
  const tags = tagList.filter((tag) => tagToCategoryEnum[tag as keyof typeof tagToCategoryEnum] === cat);
  const tagOptions = tags.map((tag): ITagOptions => ({ value: tag, label: tag }));
  return {label: cat, options: tagOptions};
})

function DatasetsPage() {
  const [selectedOptions, setSelectedOptions] = React.useState<ITagOptions[]>();
  const [selectedFilter, setselectedFilter] = React.useState<string[]>([]);

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
        onChange={(selection) => {
          setSelectedOptions(selection as ITagOptions[])
          setselectedFilter((selection as ITagOptions[]).map((option: ITagOptions) => option.value))
        }}
      />
      <div className="mt-5 ms-3 me-3 row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-4">
        {datasets.filter((dataset) => checkSubsetArrays(selectedFilter, dataset.tags)).map((dataset) => <DatasetsCard key={dataset.id} datasetInfo={dataset} />)}
      </div>
    </div>
  );
}

export default DatasetsPage;
