// import React from 'react';
import CollegeCard from "./CollegeCard";
import useDataLoaded from "../../Hooks/useDataLoaded";
import { Link } from "react-router-dom";

const College = () => {
    const collegeData  = useDataLoaded();
    return (
        <div>
            <div className="mt-20 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold">Colleges</h1>
            </div>
            <div className="px-10 mt-10 grid md:grid-cols-3 justify-center gap-20">
                {
                    collegeData.slice(0, 3).map(data => <CollegeCard key={data.index} data={data}></CollegeCard>
                    )
                }
            </div>
            <div className="flex justify-center mt-16">
            <Link to="/colleges"><button className="btn btn-warning">Show All</button></Link>
            </div>
        </div>
    );
};

export default College;