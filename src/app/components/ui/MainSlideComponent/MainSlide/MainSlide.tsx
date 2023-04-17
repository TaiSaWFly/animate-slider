import React from "react";
import style from "./mainSlide.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import Button from "../../../common/Button";
import { ReactComponent as ArrowRigth } from "../../../../../assets/svg/arrow-rigth.svg";
import BackgroundMainSlide from "../BackgroundMainSlide/BackgroundMainSlide";

interface MainSlideProps {
    nextSlide?: () => void;
}

const MainSlide: React.FC<MainSlideProps> = ({ nextSlide }) => {
    return (
        <section className={style.main_slide}>
            <BackgroundMainSlide />

            <ComponentContainer>
                <div className={style.title}>
                    <span className={style.subtitle}>Привет,</span>
                    <h1 className={style.main_title}>
                        это <span>не</span> коммерческое задание
                    </h1>

                    <Button
                        className={style.main_slide__btn}
                        onClick={nextSlide}
                    >
                        <span className={style.main_slide__btn_arrow}>
                            <ArrowRigth
                                className={style.main_slide__btn_arrow__icon}
                            />
                        </span>
                        <span>Что дальше?</span>
                    </Button>
                </div>
            </ComponentContainer>
        </section>
    );
};

export default MainSlide;
