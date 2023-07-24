// import React from 'react';

import CollegeCard from "../Home/College/CollegeCard";
import useDataLoaded from "../Hooks/useDataLoaded";

const Colleges = () => {
    const collegeData  = useDataLoaded();
    return (
        <div className="my-20">
            <div className="mt-20 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold">Colleges</h1>
            </div>
            <div className="px-10 mt-10 grid md:grid-cols-3 justify-center gap-20">
                {
                    collegeData.map(data => <CollegeCard key={data.index} data={data}></CollegeCard>
                    )
                }
            </div>
        </div>
    );
};

export default Colleges;