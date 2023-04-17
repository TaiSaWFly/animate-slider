import React, { useEffect, useState } from "react";
import style from "./textSlide.module.scss";
import ComponentContainer from "../../../common/ComponentContainer";
import BackgroundTextSlide from "../BackgroundTextSlide/BackgroundTextSlide";

interface TextSlideProps {
    currentSlide?: number;
}

const TextSlide: React.FC<TextSlideProps> = ({ currentSlide }) => {
    const [onFocus, setOnFocus] = useState(false);

    useEffect(() => {
        currentSlide !== 0 ? setOnFocus(true) : setOnFocus(false);
    }, [currentSlide]);

    return (
        <section className={style.text_slide}>
            <BackgroundTextSlide {...{ onFocus }} />

            <ComponentContainer>
                <h2 className={style.title}>Текст сообщения</h2>

                <div className={style.content_text}>
                    <div className={style.content_text_scroll}>
                        <div className={style.content}>
                            <span>Lorem ipsum dolor sit amet,</span> consectetur
                            adipisicing elit. Eligendi placeat blanditiis, odio
                            corporis delectus quasi nesciunt neque saepe eaque
                            unde sunt vero, quaerat accusantium molestias. Totam
                            eius deserunt quae veritatis. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Autem dignissimos
                            laborum dolore sit reiciendis eius? Asperiores ea
                            obcaecati, non tempore suscipit excepturi? Nobis
                            vero in fugit ut rerum quidem eum! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Ut doloribus
                            non dignissimos sequi libero, culpa nobis obcaecati
                            quidem asperiores incidunt, architecto illum
                            molestias dolores est commodi porro totam, aliquid
                            exercitationem!
                        </div>
                    </div>
                </div>
            </ComponentContainer>
        </section>
    );
};

export default TextSlide;
