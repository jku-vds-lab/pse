import '../styles/DatasetsCard.css';
import { TagsColorEnum } from '../modules/Tags';

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
    <div className="card dataset-card mb-5">
      <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.datasetInfo.name}</h5>
        <p className="card-text">{props.datasetInfo.description}</p>
        <div className="mb-3">
        {props.datasetInfo.datasetLinks &&
          Object.entries(props.datasetInfo.datasetLinks).map(([key, value]) => <a key={key} href={String(value)} className="card-link">{key}</a>)
        }
        </div>
        <div>
          {props.datasetInfo.tags.map((tag: string, idx: number) => <span key={idx} className={`badge rounded-pill me-2 bg-${TagsColorEnum[tag as keyof typeof TagsColorEnum]} ${TagsColorEnum[tag as keyof typeof TagsColorEnum] === 'light' ? "text-dark" : ""}`} >{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

export default DatasetsCard;
