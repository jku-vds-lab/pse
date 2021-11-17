import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/WorkflowItem.css';

interface IWorkflowItemProps {
    id: string;
    icon: IconDefinition;
    title: string;
    description: string;
}
function WorkflowItem(props: IWorkflowItemProps) {
    return (
        <div style={{ flex: "1" }}>
            <div style={{height: "2rem"}} className="mb-2">
            <FontAwesomeIcon id={`workflow-icon-${props.id}`} icon={props.icon} size="2x" className={`workflow-icon text-center`}/>
            </div>
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </div>
    );
}

export default WorkflowItem;
