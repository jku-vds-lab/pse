import React from 'react';
import { useParams } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import makeAnimated from 'react-select/animated';
import DatasetsCard from '../components/DatasetsCard';
import Legend from '../components/TagLegend';
import { datasets } from '../data/datasets';
import { tagToCategoryEnum, categoryToColorEnum, bsColorToHex } from '../modules/Tags';

const animatedComponents = makeAnimated();

interface ITagOptions {
  value: string,
  label: string,
  color: string
}

interface ISelectOptions {
  label: string,
  options: ITagOptions[]
}

// check if one array is a subst of another array
const checkSubsetArraysTags = (selectionTags: string[], datasetTags: string[]) => {
  return selectionTags.every((val: string) => datasetTags.includes(val));
}

const intersectArrays = (array1: string[], array2: string[]) => {
  return array1.filter(value => array2.includes(value));
}

const removeElementsFromArray = (array1: string[], array2: string[]) => {
  return array1.filter(value => !array2.includes(value))
}

// filter function for react select
const filterDatasets = (allDatasetIds: string[], selection: string[], datasetTags: string[], datasetId: string) => {
  // calculate intersection of all dataset ids with selection to check if dataset ids are in selection
  const selectionDatasets = intersectArrays(allDatasetIds, selection);

  // if no dataset ids are selected the just filter by tags
  if (selectionDatasets.length === 0) {
    return checkSubsetArraysTags(selection, datasetTags)
  }
  else if (selectionDatasets.includes(datasetId)) {
    return checkSubsetArraysTags(removeElementsFromArray(selection, allDatasetIds), datasetTags)
  }
  else {
    return false;
  }

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
const options = categoryList.map((cat: string): ISelectOptions => {
  // get all tags that have this category
  const tags = tagList.filter((tag) => tagToCategoryEnum[tag as keyof typeof tagToCategoryEnum] === cat);
  // get color of those tags
  const color = bsColorToHex[categoryToColorEnum[cat as keyof typeof categoryToColorEnum]]
  const tagOptions = tags.map((tag): ITagOptions => ({ value: tag, label: tag, color: color }));
  return { label: cat, options: tagOptions };
})

// add card names to options
// create list of dataset labels and values
const tagOptionsCardNames = datasets.map((dataset) => ({label: dataset.name, value: dataset.id, color: "#888888"}));
options.push({label: "Datasets", options: tagOptionsCardNames})

// option to change react select elements to color according to tags
const colourStyles: StylesConfig<any, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
          ? color.alpha(0.1).css()
          : undefined,
      color: isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,

      ':active': {
        ...styles[':active'],
        backgroundColor:
          isSelected
            ? data.color
            : color.alpha(0.3).css(),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

function DatasetsPage() {
  const [selectedOptions, setSelectedOptions] = React.useState<ITagOptions[]>();
  const [selectedFilter, setselectedFilter] = React.useState<string[]>([]);
  const [datasetIds] = React.useState<string[]>(datasets.map((dataset) => dataset.id));

  // get id of dataset from url
  // Pattern of given URL string: dataset_id1&dataset_id2&dataset_id3&...
  const {datasetIdsUrl} = useParams<{datasetIdsUrl: string}>();

  React.useEffect(() => {
    // change filter according to url
    if (datasetIdsUrl === 'all') {
      setselectedFilter([])
      setSelectedOptions([]);
    }
    else {
      // create list of given ids, ids are separated by &
      const datasetListIds = datasetIdsUrl.split("&");
      // update filter
      setselectedFilter(datasetListIds)
      // update selection
      const datasetListOptions = tagOptionsCardNames.filter((option) => datasetListIds.includes(option.value));
      setSelectedOptions(datasetListOptions);
    }
  }, [datasetIdsUrl])

  return (
    <div>
      <div className='container text-center mt-3'>
        <h1 className='display-6'>Dataset Overview</h1>
        <p className='mt-3 mb-5 lead'>On this page you can explore the different datastes and use-cases available in the Projection Space Explorer. Each card contains links to the example datasets in the application, as well as links to the data files and to the paper where the use-case is presented, if available. Also in each card are tags, that describe the properties of the dataset and characteristics and patterns that emerge in the embedding space. You can filter for datasets by tags or by their names in the searchbox below. The meaning of the colors of tags can be seen in the legend next to the serach field.</p>
      </div>
      <div className="d-grid gap-2 d-lg-flex justify-content-lg-center mb-5 container">
        <div className='col-lg-5 d-flex flex-column justify-content-center'>

        <Select
          className={"col-lg-5 w-100"}
          value={selectedOptions}
          placeholder={"Filter datasets by tags or names . . ."}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          styles={colourStyles}
          onChange={(selection) => {
            setSelectedOptions(selection as ITagOptions[])
            setselectedFilter((selection as ITagOptions[]).map((option: ITagOptions) => option.value))
          }}
        />
        </div>
        <Legend />
      </div>
      <div className="ms-3 me-3 row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-4">
        {datasets.filter((dataset) => filterDatasets(datasetIds, selectedFilter, dataset.tags, dataset.id)).map((dataset) => <DatasetsCard key={dataset.id} datasetInfo={dataset} />)}
      </div>
    </div>
  );
}

export default DatasetsPage;
