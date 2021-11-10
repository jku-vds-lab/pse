import { useAsync } from "react-async";
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

// You can use async/await or any function that returns a Promise
const loadPlayer = async (imgPath: string) => { 
  const res = await require(imgPath).default; 
  return res;
}

function DatasetsCard(props: IDatasetCardProps) {
  const { data, error, isPending } = useAsync(loadPlayer(`../assets/datasetImages/${props.datasetInfo.imagePath}`))
  console.log(isPending)
  const datasetImage = require(`../assets/datasetImages/${props.datasetInfo.imagePath}`).default; 

  return (
    <div className="card dataset-card mb-5 ms-3 me-3">
      <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top"/>
      <div className ="card-body">
      <h5 className ="card-title">{props.datasetInfo.name}</h5>
      <p className ="card-text">{props.datasetInfo.description}</p>
      {props.datasetInfo.tags.map((tag: string, idx: number) => <span key={idx} className={`badge rounded-pill me-2 bg-${tagColors[TagsColorsIndex[tag as keyof typeof TagsColorsIndex]]}`} >{tag}</span>)}
      </div>
    </div>
  );
}

export default DatasetsCard;
