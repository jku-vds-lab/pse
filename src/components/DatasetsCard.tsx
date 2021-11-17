import '../styles/DatasetsCard.css';
import { TagsColorsIndex, tagColors } from '../modules/Tags';

interface IDatasetCardProps {
  datasetInfo: IDatasetInfo
}

interface IDatasetInfo {
  name: string;
  type: string;
  description: string;
  tags: string[];
  imagePath: string;
  datasetLinks?: {};
}


function DatasetsCard(props: IDatasetCardProps) {
  const datasetImage = require(`../assets/datasetImages/${props.datasetInfo.imagePath}`).default;

  return (
    <div className="card dataset-card mb-5 ms-3 me-3">
      <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.datasetInfo.name}</h5>
        <p className="card-text">{props.datasetInfo.description}</p>
        {props.datasetInfo.datasetLinks &&
        Object.entries(props.datasetInfo.datasetLinks).map(([key, value]) => <a key={key} href={String(value)} className="card-link">{key}</a>)
        }
        {props.datasetInfo.tags.map((tag: string, idx: number) => <span key={idx} className={`badge rounded-pill me-2 bg-${tagColors[TagsColorsIndex[tag as keyof typeof TagsColorsIndex]]}`} >{tag}</span>)}
      </div>
    </div>
  );
}

export default DatasetsCard;
