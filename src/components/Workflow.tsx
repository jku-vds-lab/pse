import { useEffect } from 'react';
import pseIconDataset from '../assets/pse-icons/pse-icon-dataset.svg';
import pseIconProject from '../assets/pse-icons/pse-icon-project.svg';
import pseIconDetails from '../assets/pse-icons/pse-icon-details.svg';

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
        <WorkflowItem id="data" icon={pseIconDataset} title={"Choose dataset"} description={"Either choose a predefined dataset from the list or upload your own file."} />
        <WorkflowItem id="reduction" icon={pseIconProject} title={"Project data"} description={"Choose the attributes for plotting or apply a dimensionality reduction technique of your choice."} />
        <WorkflowItem id="results" icon={pseIconDetails} title={"Explore details"} description={"Explore the resulting data by hovering over points, defining groups or using clustering algorithms."} />
      </div>
    </div>
  );
}

export default Workflow;
