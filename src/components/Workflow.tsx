import { useEffect } from 'react';
import { faDatabase, faProjectDiagram, faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import WorkflowItem from '../components/WorkflowItem';

function Workflow() {
  useEffect(() => {
    const observerData = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-data');
        }
      });
    });
    const observerReduction = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-reduction');
        }
      });
    });
    const observerResults = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-results');
        }
      });
    });
    
    observerData.observe(document.querySelector('#workflow-icon-data')!);
    observerReduction.observe(document.querySelector('#workflow-icon-reduction')!);
    observerResults.observe(document.querySelector('#workflow-icon-results')!);
})
  return (
    <div className="bg-body rounded border-bottom mb-5 text-center">
      <h3 className="display-6 text-center mb-5">How it works</h3>
      <div className="container text-center mx-auto text-muted d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <WorkflowItem id="data" icon={faDatabase} title={"Choose dataset"} description={"Either choose a predefined dataset from the list or upload your own file."} />
        <WorkflowItem id="reduction" icon={faCompressArrowsAlt} title={"Project data"} description={"Choose the attributes for plotting or apply a dimensionality reduction technique of your choice."} />
        <WorkflowItem id="results" icon={faProjectDiagram} title={"Explore embedding"} description={"Explore the resulting data by hovering over points, defining groups or using clustering algorithms."} />
      </div>
    </div>
  );
}

export default Workflow;
