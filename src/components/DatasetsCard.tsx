import '../styles/DatasetsCard.css'

// make this modular later
import datasetImage from '../assets/datasetImages/dataset_1.png';

interface IDatasetsCardProps {
  datasetInfo: any
}

function DatasetsCard(props: IDatasetsCardProps) {
  const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  return (
    <div className="card dataset-card mb-5">
      <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top"/>
      <div className ="card-body">
      <h5 className ="card-title">{props.datasetInfo.name}</h5>
      <p className ="card-text">{props.datasetInfo.description}</p>
      {props.datasetInfo.tags.map((tag: string, idx: number) => <span className={`badge rounded-pill me-2 bg-${badgeColors[idx]}`} >{tag}</span>)}
      </div>
    </div>
  );
}

export default DatasetsCard;
