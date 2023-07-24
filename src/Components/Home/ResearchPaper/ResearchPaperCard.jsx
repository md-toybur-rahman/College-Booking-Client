import { Link } from "react-router-dom";


const ResearchPaperCard = ({ data }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={data.research_history.research_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ps-12 text-start">
                    <div>
                        <h2 className="card-title">{data.college_name}</h2>
                        {/* <h2>{data.college_name}</h2> */}
                    </div>
                    <div>
                        <p><span className="font-bold">Total Research Projects: </span>{data.research_history.total_research_projects}</p>
                        <p><span className="font-bold">Ongoing Projects: </span>{data.research_history.ongoing_projects}</p>
                        <p><span className="font-bold">Total Published Papers: </span>{data.research_history.published_papers}</p>
                        <span className="font-bold">Research Areas: </span>
                        {
                            data.research_history.research_areas.map(area => <li key={area.index}>{area}</li>)
                        }
                        <p><span className="font-bold">Go to Website: </span><Link target="blank" to={`${data.research_history.website_link}`}>Click Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaperCard;