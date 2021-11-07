import '../styles/DatasetsCard.css';
import {TagsColorsIndex, tagColors} from '../modules/Tags';

interface IDatasetCardProps {
  datasetInfo: IDatasetInfo
}

interface IDatasetInfo {
  name: string;
  type: string;
  description: string;
  tags: string[];
  imagePath: string;

}

function DatasetsCard(props: IDatasetCardProps) {
  const datasetImage = require(`../assets/datasetImages/${props.datasetInfo.imagePath}`).default; 

  return (
    <div className="card dataset-card mb-5">
      <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top"/>
      <div className ="card-body">
      <h5 className ="card-title">{props.datasetInfo.name}</h5>
      <p className ="card-text">{props.datasetInfo.description}</p>
      {props.datasetInfo.tags.map((tag: string) => <span className={`badge rounded-pill me-2 bg-${tagColors[TagsColorsIndex[tag as keyof typeof TagsColorsIndex]]}`} >{tag}</span>)}
      </div>
    </div>
  );
}

export default DatasetsCard;
