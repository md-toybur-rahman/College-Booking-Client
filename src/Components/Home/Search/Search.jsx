// import React from 'react';

import { useState } from "react";
// import useDataLoaded from "../../Hooks/useDataLoaded";
import { useNavigate } from "react-router-dom";

const Search = () => {
    // const loadedData = useDataLoaded();
    const [collegeData, setCollegeData] = useState([]);
    const navigate = useNavigate();
    console.log(collegeData[0]);



    const handleSearch = async event => {
        event.preventDefault();
        const form = event.target;
        const search = (form.search.value).toLowerCase();
        console.log(search);
        await fetch('https://college-booking-server-sable.vercel.app/info')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const filter = data.filter(college => (college.college_name).toLowerCase().includes(search));
                console.log(filter);
                setCollegeData(filter);
            })
        navigate(`/details/${collegeData[0]._id}`)
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-8 form-control">
                <form className="join" onSubmit={handleSearch} >
                    <div>
                        <div>
                            <input style={{ outline: 'none' }} name="search" className="input input-bordered join-item md:w-[400px]" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button type="submit" className="btn btn-warning join-item">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;