// import React from 'react';

import { Link } from "react-router-dom";
import useDataLoaded from "../../Hooks/useDataLoaded";
import ResearchPaperCard from "./ResearchPaperCard";

const ResearchPaper = () => {
    const collegeData = useDataLoaded();
    return (
        <div>
            <div className="mt-20 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold">Research History</h1>
            </div>
            <div className="px-10 mt-10 grid md:grid-cols-3 justify-center gap-20">
                {
                    collegeData.slice(0, 3).map(data => <ResearchPaperCard key={data.index} data={data}></ResearchPaperCard>
                    )
                }
            </div>
            <div className="flex justify-center mt-16">
                <Link to="/research"><button className="btn btn-warning">Show All</button></Link>
            </div>
        </div>
    );
};

export default ResearchPaper;