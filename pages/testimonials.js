import TestimonialSlider from "../components/TestimonialSlider";
import Fade from 'react-reveal/Fade';


const Testimonials = ({ mode }) => {
    return <Fade>
        <div className="h-full bg-primary/30 py-32 text-center">
            <div className="container mx-auto h-full flex flex-col justify-center">
                {/* title  */}
                <Fade >
                    <div class="text-center">
                        <h1 class={mode ? `sm:text-4xl text-2xl font-bold title-font text-[#e9e7ee]  mb-2` : `sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-2`}>What Clients say.</h1>
                        <div class="flex mt-3 mb-10 justify-center">
                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                </Fade>
                {/* slider  */}
                <div
                >
                    <TestimonialSlider />
                </div>
            </div>
        </div>;
    </Fade>
};

export default Testimonials;
