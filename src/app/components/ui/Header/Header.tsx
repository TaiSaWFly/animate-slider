import React from "react";
import { ReactComponent as Home } from "../../../../assets/svg/home.svg";
import style from "./header.module.scss";
import ComponentContainer from "../../common/ComponentContainer";

interface HeaderProps {
    onMainSlide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMainSlide }) => {
    return (
        <header className={style.header}>
            <ComponentContainer>
                <div className={style.header_wrapper}>
                    <div className={style.header_home} onClick={onMainSlide}>
                        <Home width="25px" height="25px" />
                    </div>
                    <div className={style.header_title}>project</div>
                </div>
            </ComponentContainer>
        </header>
    );
};

export default Header;
