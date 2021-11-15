import { faDatabase, faProjectDiagram, faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import WorkflowItem from '../components/WorkflowItem';

function Workflow() {
  return (
    <div className="bg-body rounded border-bottom mb-5 text-center">
      <h3 className="display-6 text-center mb-5">How it works</h3>
      <div className="container d-flex flex-row justify-content-around mb-5 text-muted">
        <WorkflowItem id="data" icon={faDatabase} title={"Choose dataset"} description={"Choose a predefined dataset or upload your own."} />
        <WorkflowItem id="reduction" icon={faCompressArrowsAlt} title={"Project data"} description={"Apply a projection technique of your choice."} />
        <WorkflowItem id="results" icon={faProjectDiagram} title={"See results"} description={"See the path in the embeding space."} />
      </div>
    </div>
  );
}

export default Workflow;
