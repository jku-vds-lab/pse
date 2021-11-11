import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IWorkflowItemProps {
    icon: IconDefinition;
    title: string;
    description: string;
}
function WorkflowItem(props: IWorkflowItemProps) {
    return (
      <div style={{flex: "1"}}>
          <FontAwesomeIcon icon={props.icon} size="2x" className="text-center mb-2"/>
          <h3>{props.title}</h3>
          <p>
              {props.description}
          </p>
      </div>
    );
  }
  
  export default WorkflowItem;
  