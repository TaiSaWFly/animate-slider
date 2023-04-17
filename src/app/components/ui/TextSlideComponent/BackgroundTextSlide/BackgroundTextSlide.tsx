import React from "react";
import style from "./backgroundTextSlide.module.scss";
import getImages from "../../../../data/getImages";

interface BackgroundTextSlideProps {
    onFocus: boolean;
}

const BackgroundTextSlide: React.FC<BackgroundTextSlideProps> = ({
    onFocus
}) => {
    return (
        <>
            <div className={onFocus ? style.item_t1__active : style.item_t1}>
                <img src={require(`/src/${getImages.img_10}`)} />
            </div>

            <div className={onFocus ? style.item_t2__active : style.item_t2}>
                <img src={require(`/src/${getImages.img_11}`)} />
            </div>

            <div className={onFocus ? style.item_t3__active : style.item_t3}>
                <img src={require(`/src/${getImages.img_12}`)} />
            </div>

            <div className={onFocus ? style.item_t4__active : style.item_t4}>
                <img src={require(`/src/${getImages.img_13}`)} />
            </div>

            <div className={onFocus ? style.item_t5__active : style.item_t5}>
                <img src={require(`/src/${getImages.img_14}`)} />
            </div>
        </>
    );
};

export default BackgroundTextSlide;
