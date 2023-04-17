import React, {
    useState,
    useEffect,
    Children,
    cloneElement,
    ReactElement
} from "react";
import style from "./slider.module.scss";

interface SliderProps {
    children: ReactElement[];
    offset: number;
    PAGE_WIDTH: number;
    getCurrentSlide: () => number;
    calcPageWidth: () => number;
    handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
    handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
}

const Slider: React.FC<SliderProps> = ({
    children,
    offset,
    PAGE_WIDTH,
    getCurrentSlide,
    calcPageWidth,
    handleTouchStart,
    handleTouchMove
}) => {
    const [pages, setPages] = useState<ReactElement[]>([]);

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                const config = {
                    ...child.props,
                    currentSlide: getCurrentSlide()
                };

                return (
                    <div
                        style={{
                            height: "100%",
                            minWidth: `${PAGE_WIDTH}px`,
                            maxWidth: `${PAGE_WIDTH}px`
                        }}
                    >
                        {cloneElement(child, config)}
                    </div>
                );
            })
        );
    }, [offset]);

    return (
        <div className={style.slider}>
            <div className={style.window}>
                <div
                    className={style.slider_pages}
                    onTouchStart={(e) => handleTouchStart(e)}
                    onTouchMove={(e) => handleTouchMove(e)}
                    style={{
                        width: `${calcPageWidth()}px`,
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </div>
            </div>
        </div>
    );
};

export default Slider;
