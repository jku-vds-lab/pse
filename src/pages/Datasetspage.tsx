import DatasetsCard from '../components/DatasetsCard';
import { datasets } from '../data/datasets';

function DatasetsPage() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-around flex-wrap">
        {datasets.map((dataset) => <DatasetsCard key={dataset.id} datasetInfo={dataset} />)}
      </div>
    </div>
  );
}

export default DatasetsPage;
