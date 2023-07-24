

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import useDataLoaded from '../Hooks/useDataLoaded';

const AutoplaySlider = withAutoplay(AwesomeSlider);


const FullGallery = () => {
    const collegeData = useDataLoaded();
    return (
        <div>
            <div className="mt-20 text-center">
                <h1 className="text-2xl md:text-5xl font-semibold">Graduation Gallery</h1>
            </div>
            <div className="px-10 mt-10 grid md:grid-cols-3 justify-center gap-20">
                {
                    collegeData.map(data => <div key={data.index}>
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
                        {/* <div>
                            <button className="btn btn-warning" onClick={() => window.my_modal_3.showModal()}>Show All Images</button>
                            <dialog id="my_modal_3" className="modal">
                                <form method="dialog" className="modal-box">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </form>
                            </dialog>
                        </div> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default FullGallery;