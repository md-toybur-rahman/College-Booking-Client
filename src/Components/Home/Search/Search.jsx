// import React from 'react';

const Search = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <div className="join">
                <div>
                    <div>
                        <input style={{outline: 'none'}} className="input input-bordered join-item md:w-[400px]" placeholder="Search" />
                    </div>
                </div>
                {/* <select style={{outline: 'none'}} className="select select-bordered join-item">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select> */}
                <div className="indicator">
                    <button className="btn btn-warning join-item">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;