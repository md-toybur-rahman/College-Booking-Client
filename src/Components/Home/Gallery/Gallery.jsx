// import React from 'react';

import useDataLoaded from "../../Hooks/useDataLoaded";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
    const collegeData = useDataLoaded();
    return (
        <div>
            <div className="mt-20 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold">Graduation Gallery</h1>
            </div>
            <div className="px-10 mt-10 grid md:grid-cols-3 justify-center gap-20">
                {
                    collegeData.slice(0, 6).map(data => <div key={data.index}>
                        <AutoplaySlider
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={3000}
                            organicArrows={false}
                            bullets={false}>
                            {
                                data.graduation_image.map(image => <div key={image.index}><img src={image} alt="" /></div>)
                            }
                        </AutoplaySlider>
                        <h1 className="text-center mt-4 font-semibold text-2xl">{data.college_name}</h1>
                    </div>)
                }
            </div>
            <div className="flex justify-center mt-16">
                <Link to="/gallery"><button className="btn btn-warning">Show All</button></Link>
            </div>
        </div>
    );
};

export default Gallery;