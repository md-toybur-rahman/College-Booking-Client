// import React from 'react';

import { Link } from "react-router-dom";

const CollegeCard = ({ data }) => {
    return (
        <div className="bg-base-100 shadow-xl">
            <div className="">
                <img className="md:h-[300px] h-[300px] rounded-lg" src={data.college_image} alt="Album" />
            </div>
            <div className="card-body">
                <h2 className="card-title md:font-bold md:text-2xl">{data.college_name}</h2>
                <p><span className="font-bold">Admission Date: </span> {data.admission_date}</p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="font-bold">Events: </span>
                        <p>{data.events.map(event => <li className="list-decimal" key={event.index}>{event.event_name}</li>)}</p>
                    </div>
                    <div>
                        <span className="font-bold">Sports: </span>
                        <p>{data.sports.teams.map(sport => <li className="list-decimal" key={sport.index}>{sport.sports_name}</li>)}</p>
                    </div>
                </div>
                <div>
                    <span className="font-bold">Research History: </span>
                    <p><span className="font-bold">Total Research Projects: </span>{data.research_history.total_research_projects}</p>
                    <p><span className="font-bold">Ongoing Projects: </span>{data.research_history.ongoing_projects}</p>
                    <p><span className="font-bold">Total Published Papers: </span>{data.research_history.published_papers}</p>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/details/${data.id}`}><button className="btn btn-warning">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;