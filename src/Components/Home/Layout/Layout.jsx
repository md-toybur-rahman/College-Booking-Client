// import React from 'react';

import College from "../College/College";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import Review from "../Review/Review";
import Search from "../Search/Search";

const Layout = () => {
    return (
        <div>
            <Search></Search>
            <College></College>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Layout;