import React from "react";
import style from "./benefitsModal.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import BenefitsList from "../BenefitsList/BenefitsList";
import { ReactComponent as Close } from "../../../../../assets/svg/close.svg";

interface BenefitsModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

const BenefitsModal: React.FC<BenefitsModalProps> = ({
    isOpen,
    onCloseModal
}) => {
    return (
        <div
            className={
                isOpen
                    ? style.benefits_modal__window_show
                    : style.benefits_modal__window_hide
            }
        >
            <ComponentContainer>
                <div className={style.benefits_modal}>
                    <div className={style.benefits_modal__content}>
                        <div className={style.benefits_modal__title}>
                            Преимущества
                        </div>

                        <BenefitsList />
                    </div>

                    <div
                        className={style.benefits_modal__close}
                        onClick={onCloseModal}
                    >
                        <Close className={style.benefits_modal__close_icon} />
                    </div>
                </div>
            </ComponentContainer>
        </div>
    );
};

export default BenefitsModal;
