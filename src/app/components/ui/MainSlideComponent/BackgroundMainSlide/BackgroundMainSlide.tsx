import React from "react";
import style from "./backgroundMainSlide.module.scss";
import getImages from "../../../../data/getImages";

const BackgroundMainSlide: React.FC = () => {
    return (
        <>
            <div className={style.item_m1}>
                <img src={require(`/src/${getImages.img_1}`)} />
            </div>

            <div className={style.item_m2}>
                <img src={require(`/src/${getImages.img_2}`)} />
            </div>

            <div className={style.item_m3}>
                <img src={require(`/src/${getImages.img_3}`)} />
            </div>

            <div className={style.item_m4}>
                <img src={require(`/src/${getImages.img_8}`)} />
            </div>

            <div className={style.item_m5}>
                <img src={require(`/src/${getImages.img_4}`)} />
            </div>

            <div className={style.item_m6}>
                <img src={require(`/src/${getImages.img_5}`)} />
            </div>

            <div className={style.item_m7}>
                <img src={require(`/src/${getImages.img_6}`)} />
            </div>

            <div className={style.item_m8}>
                <img src={require(`/src/${getImages.img_9}`)} />
            </div>

            <div className={style.item_m9}>
                <img src={require(`/src/${getImages.img_7}`)} />
            </div>
        </>
    );
};

export default BackgroundMainSlide;
