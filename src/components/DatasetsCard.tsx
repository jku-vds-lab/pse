import { TagsColorEnum } from '../modules/Tags';
import { useState } from 'react';

interface IDatasetCardProps {
  datasetInfo: IDatasetInfo
}

interface IDatasetInfo {
  name: string;
  id: string;
  type: string;
  primaryDescription: string;
  secondaryDescription: string;
  tags: string[];
  imagePath: string;
  datasetLinks?: {};
}


function DatasetsCard(props: IDatasetCardProps) {
  const [collapseButton, setcollapseButton] = useState("Show more");
  const datasetImage = require(`../assets/datasetImages/${props.datasetInfo.imagePath}`).default;

  return (
    <div className="col">
      <div className="card dataset-card mb-5">
        <img src={datasetImage} alt={props.datasetInfo.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.datasetInfo.name}</h5>
          <p className="card-text mb-0">{props.datasetInfo.primaryDescription}</p>
          <p className="card-text collapse mb-0" id={`description-${props.datasetInfo.id}`}>{props.datasetInfo.secondaryDescription}</p>
          <button id={`collapseButton-${props.datasetInfo.id}`} className="btn btn-outline-secondary mt-3 mb-3" data-bs-toggle="collapse" data-bs-target={`#description-${props.datasetInfo.id}`} aria-expanded="false" aria-controls={`description-${props.datasetInfo.id}`}
            onClick={() => {
              if (document.getElementById(`collapseButton-${props.datasetInfo.id}`)?.classList.contains("collapsed")) {
                setcollapseButton("Show more")
              } else {
                setcollapseButton("Show less")
              }
            }}>
            {collapseButton}
          </button>
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
    </div>

  );
}

export default DatasetsCard;
