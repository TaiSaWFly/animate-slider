import React, { ReactNode } from "react";

interface ComponentContainerProps {
    children: ReactNode;
    styleName?: string;
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
    children,
    styleName
}) => {
    return (
        <div className={styleName !== undefined ? styleName : "container"}>
            {children}
        </div>
    );
};

export default ComponentContainer;
