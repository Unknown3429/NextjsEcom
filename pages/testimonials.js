import TestimonialSlider from "../components/TestimonialSlider";
import Fade from 'react-reveal/Fade';


const Testimonials = () => {
    return <Fade>
        <div className="h-full bg-primary/30 py-32 text-center">
            <div className="container mx-auto h-full flex flex-col justify-center">
                {/* title  */}
                <h2
                    className="h2 mb-8 xl:mb-0"
                >What Clients <span className="text-accent">say.</span></h2>
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
