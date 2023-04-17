import React, { useEffect, useState, ReactElement } from "react";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import MainSlide from "./components/ui/MainSlideComponent/MainSlide/MainSlide";
import TextSlide from "./components/ui/TextSlideComponent/TextSlide/TextSlide";
import Slider from "../app/hoc/Slider/Slider";
import BenefitsSlide from "./components/ui/BenefitsSlideComponent/BenefitsSlide/BenefitsSlide";
import { useSlider } from "./hooks/useSlider";

const App: React.FC = () => {
    const [pageLength, setPageLength] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const {
        offset,
        PAGE_WIDTH,
        calcPageWidth,
        handleToMainSlide,
        handleRigthSlides,
        handleTouchStart,
        handleTouchMove,
        getCurrentSlide,
        blockSliderActions
    } = useSlider(pageLength);

    useEffect(() => {
        setPageLength(slidersComponents.length);
    }, []);

    useEffect(() => {
        if (pageLength !== 0) {
            setIsLoading(false);
        }
    }, [pageLength]);

    const slidersComponents: ReactElement[] = [
        <MainSlide key={0} {...{ nextSlide: handleRigthSlides }} />,
        <TextSlide key={1} />,
        <BenefitsSlide key={2} {...{ blockSliderActions }} />
    ];

    return (
        <div className="app_wrapper">
            <Header {...{ onMainSlide: handleToMainSlide }} />

            <main>
                {!isLoading ? (
                    <Slider
                        {...{
                            offset,
                            PAGE_WIDTH,
                            getCurrentSlide,
                            calcPageWidth,
                            handleTouchStart,
                            handleTouchMove
                        }}
                    >
                        {slidersComponents}
                    </Slider>
                ) : (
                    <MainSlide />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default App;
