interface IPublicationsCardProps {
    title: string;
    subTitle?: string;
    description: string;
    link: string;
    imagePath: string;
}

function PublicationsCard(props: IPublicationsCardProps) {
    const datasetImage = require(`../assets/publicationImages/${props.imagePath}`);
    return (
        <div className="card mb-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={datasetImage} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                        <p className="card-text">{props.description}</p>
                        <p>You can find this paper <a href={props.link} className="card-link">here</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicationsCard;