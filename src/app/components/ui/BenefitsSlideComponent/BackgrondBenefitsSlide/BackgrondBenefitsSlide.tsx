import React from "react";
import style from "./backgrondBenefitsSlide.module.scss";
import getImages from "../../../../data/getImages";
import { ReactComponent as Botlle } from "../../../../../assets/svg/bottle.svg";

const BackgrondBenefitsSlide: React.FC = () => {
    return (
        <>
            <div className={style.item_b1}>
                <Botlle />
            </div>

            <div className={style.item_b2}>
                <img src={require(`/src/${getImages.img_15}`)} />
            </div>

            <div className={style.item_b3}>
                <img src={require(`/src/${getImages.img_16}`)} />
            </div>

            <div className={style.item_b4}>
                <img src={require(`/src/${getImages.img_16}`)} />
            </div>

            <div className={style.item_b5}>
                <img src={require(`/src/${getImages.img_18}`)} />
            </div>

            <div className={style.item_b6}>
                <img src={require(`/src/${getImages.img_18}`)} />
            </div>

            <div className={style.item_b7}>
                <img src={require(`/src/${getImages.img_18}`)} />
            </div>

            <div className={style.item_b8}>
                <img src={require(`/src/${getImages.img_18}`)} />
            </div>

            <div className={style.item_b9}>
                <img src={require(`/src/${getImages.img_17}`)} />
            </div>
        </>
    );
};

export default BackgrondBenefitsSlide;
