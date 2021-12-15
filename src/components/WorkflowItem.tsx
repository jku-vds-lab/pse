
import '../styles/WorkflowItem.css';

interface IWorkflowItemProps {
    id: string;
    icon: string;
    title: string;
    description: string;
}
function WorkflowItem(props: IWorkflowItemProps) {
    return (
        <div style={{flex: "1"}}>
            <div style={{ height: "5rem" }} className="mb-2">
                <img id={`workflow-icon-${props.id}`} src={props.icon} alt="Logo" width="150" height="40" className="workflow-icon text-center" />
                
            </div>
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </div>
    );
}

export default WorkflowItem;
