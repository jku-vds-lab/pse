import DatasetsCard from '../components/DatasetsCard';
import * as datasets from '../data/datasets.json';

function DatasetsPage() {
  return (
    <div className="container mt-5 d-flex flex-row justify-content-around flex-wrap">
        <DatasetsCard datasetInfo={datasets.dataset_1}/>
        <DatasetsCard datasetInfo={datasets.dataset_1}/>
        <DatasetsCard datasetInfo={datasets.dataset_1}/>
        <DatasetsCard datasetInfo={datasets.dataset_1}/>
    </div>
  );
}

export default DatasetsPage;
