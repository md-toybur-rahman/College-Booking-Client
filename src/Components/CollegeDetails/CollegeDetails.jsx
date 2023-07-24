// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import './CollegeDetails.css'

const CollegeDetails = () => {
    const [data] = useLoaderData();
    const ratings = data.college_rating;

    return (
        <div className="mb-20">
            {/* This is College Details Page and the id no is {`${data._id}`}  and {`${data.id}`} */}
            <div style={{ backgroundImage: `url(${data.college_image})` }} className="h-[50vh] opacity-1 bg-cover relative">
                <div className="h-full bg-black bg-auto opacity-50">
                    <div className="text-5xl font-semibold text-white flex items-center justify-center h-full">
                        <h1>{data.college_name}</h1>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">College Gallery</h1>
                <div className="grid md:grid-cols-3 mt-10 gap-10 px-10">
                    <img className="md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                    <img className="md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                    <img className="md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                    <img className="md:block hidden md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                    <img className="md:block hidden md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                    <img className="md:block hidden md:h-[300px] md:w-[400px] rounded-lg" src={data.college_image} alt="" />
                </div>
            </div>
            <div className="mt-10">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">Events</h1>
                <div className="grid md:grid-cols-2 mt-10 gap-10 px-10">
                    {
                        data.events.map(event => <div key={event.index} className="card w-96 bg-purple-100 text-black mx-auto">
                            <div className="card-body">
                                <h2 className="card-title">{event.event_name}</h2>
                                <p><span className="font-bold">Event Date: </span>{event.date}</p>
                                <p><span className="font-bold">Description: </span>{event.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-20">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">Research History</h1>
                <div className="grid md:grid-cols-2 mt-10 gap-20 px-10 items-center justify-around">
                    <div>
                        <img src={data.research_history.research_image} alt="" />
                    </div>
                    <div>
                        <p><span className="text-xl font-bold">Research Areas: </span></p>
                        {
                            data.research_history.research_areas.map(area => <li className="font-semibold text-lg" key={area.index}>{area}</li>)
                        }
                        <p className="text-lg font-semibold mt-3"><span className="font-bold text-xl">Total Research Projects: </span>{data.research_history.total_research_projects}</p>
                        <p className="text-lg font-semibold mt-3"><span className="font-bold text-xl">Ongoing Projects: </span>{data.research_history.ongoing_projects}</p>
                        <p className="text-lg font-semibold mt-3"><span className="font-bold text-xl">Published Paper: </span>{data.research_history.published_papers}</p>
                        <button className="btn btn-warning mt-12"><Link target="blank" to={`${data.research_history.website_link}`}>Visit Research Website</Link></button>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">Sports</h1>
                <div className="grid md:grid-cols-2 mt-10 gap-10 px-10">
                    {
                        data.sports.teams.map(team => <div key={team.index} className=" bg-base-100 shadow-xl">
                            <figure className="grid grid-cols-2">
                                <img src={team.sports_image} alt="Sports" />
                                <img src={team.field_image} alt="Sports" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-center text-3xl font-semibold">{team.sports_name}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-20">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">Graduation Gallery</h1>
                <div className="grid md:grid-cols-3 mt-10 gap-10 px-10">
                    {
                        data.graduation_image.slice(0, 3).map(image => <div key={image.index} className="mx-auto">
                            <img className="md:h-[300px] md:w-[400px] rounded-lg" src={image} alt="" />
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-20">
                <h1 className="md:text-5xl text-3xl font-semibold text-center">Others</h1>
                <p className="text-center mt-10 text-2xl font-semibold">Facilities</p>
                <div className="grid md:grid-cols-4 mt-10 gap-10 px-10">
                    {
                        data.sports.facilities.map(point => <div key={point.index} className="mx-auto">
                            <h1 className="text-xl font-semibold"><span className="me-3">🟠</span>{point}</h1>
                        </div>)
                    }
                </div>
                <p className="text-center mt-10 text-2xl font-semibold">Ratings</p>
                <div className="mt-10 gap-10 px-10 flex justify-center">
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 1 && ratings > 0? true : false}/>
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 2 && ratings > 1? true : false}/>
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 3 && ratings > 2? true : false}/>
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 4 && ratings > 3? true : false}/>
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 5 && ratings > 4? true : false}/>
                        {/* <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked={ratings <= 2? false : true} />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked={ratings <= 3? false : true} />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked={ratings <= 4? false : true}/>
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked={ratings == 5? false : true} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;