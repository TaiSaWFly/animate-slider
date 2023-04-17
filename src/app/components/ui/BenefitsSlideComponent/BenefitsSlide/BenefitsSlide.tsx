import React, { useState, useEffect } from "react";
import style from "./benefitsSlide.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import BackgrondBenefitsSlide from "../BackgrondBenefitsSlide/BackgrondBenefitsSlide";
import Button from "../../../common/Button";
import { ReactComponent as Plus } from "../../../../../assets/svg/plus.svg";
import { ReactComponent as Dish } from "../../../../../assets/svg/dish.svg";
import { ReactComponent as Calendar } from "../../../../../assets/svg/calendar.svg";
import BenefitsModal from "../BenefitsModal/BenefitsModal";

interface BenefitsSlideProps {
    blockSliderActions: (isBlock: boolean) => void;
}

const BenefitsSlide: React.FC<BenefitsSlideProps> = ({
    blockSliderActions
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        blockSliderActions(isModalOpen);
    }, [isModalOpen]);

    return (
        <>
            <section className={style.benefits_slide}>
                <BenefitsModal
                    isOpen={isModalOpen}
                    onCloseModal={handleCloseModal}
                />

                <BackgrondBenefitsSlide />

                <ComponentContainer>
                    <div className={style.title}>
                        <div className={style.benefits_slide__container}>
                            <div className={style.subtitle}>
                                Ключевое сообщение
                            </div>

                            <h3 className={style.title_benefits}>
                                brend<span>xy</span>
                            </h3>
                        </div>
                    </div>

                    <div className={style.benefits_content}>
                        <div className={style.benefits_content__dish}>
                            <div className={style.benefits_slide__container}>
                                <p>
                                    Ehicula ipsum a arcu cursus vitae. Eu non
                                    diam phasellus vestibulum lorem sed risus
                                    ultricies
                                </p>
                            </div>

                            <Dish
                                className={style.benefits_content__dish_icon}
                            />
                        </div>

                        <div className={style.benefits_content__calendar}>
                            <p>
                                A arcu <br />
                                cursus vitae
                            </p>

                            <Calendar
                                className={
                                    style.benefits_content__calendar_icon
                                }
                            />
                        </div>

                        <div className={style.benefits_content__info}>
                            <Button
                                className={style.benefits_content__info_btn}
                                onClick={handleOpenModal}
                            >
                                <span
                                    className={
                                        style.benefits_content__info_btn_add
                                    }
                                >
                                    <Plus
                                        className={
                                            style.benefits_content__info_btn_add__icon
                                        }
                                    />
                                </span>
                                <span>Подробнее</span>
                            </Button>
                        </div>
                    </div>
                </ComponentContainer>
            </section>
        </>
    );
};

export default BenefitsSlide;
