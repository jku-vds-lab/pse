
interface IPublicationsCardProps {
    title: string;
    subTitle?: string;
    description: string;
    link: string;
}

function PublicationsCard(props: IPublicationsCardProps) {
    return (
        <div className="card flex-fill mb-5">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                <p className="card-text">{props.description}</p>
                <p>You can find this paper <a href={props.link} className="card-link">here</a>.</p>
            </div>
        </div>
    );
}

export default PublicationsCard;