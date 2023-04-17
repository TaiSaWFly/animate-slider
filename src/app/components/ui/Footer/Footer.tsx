import React from "react";
import ComponentContainer from "../../common/ComponentContainer";
import style from "./footer.module.scss";
import { ReactComponent as Logotype } from "../../../../assets/svg/logo.svg";

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <ComponentContainer>
                <Logotype />
            </ComponentContainer>
        </footer>
    );
};

export default Footer;
