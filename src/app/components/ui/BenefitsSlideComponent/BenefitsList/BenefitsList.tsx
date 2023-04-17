import React, { useState } from "react";
import { benefits } from "../../../../data/benefits";
import style from "./benefitsList.module.scss";
import parseNumberToString from "../../../../utils/parseNumberToString";
import Pagination from "../../../common/Pagination/Pagination";
import { pageSize } from "../../../../data/variables";
import paginate from "../../../../utils/paginate";

const BenefitsList: React.FC = () => {
    const count = benefits.length;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const handlePrevPageChange = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPageChange = (pageLength: number) => {
        if (currentPage < pageLength) {
            setCurrentPage(currentPage + 1);
        }
    };

    const benefitsCrop = paginate(benefits, currentPage, pageSize);

    return (
        <>
            <ul className={style.benefits_list}>
                {benefitsCrop.map((b) => (
                    <li key={b._id} className={style.benefits_list__item}>
                        <div className={style.benefits_list__item_count}>
                            {parseNumberToString(b._id)}
                        </div>
                        <div className={style.benefits_list__item_content}>
                            {b.content}
                        </div>
                    </li>
                ))}
            </ul>

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onPrevPageChange={handlePrevPageChange}
                onNextPageChange={handleNextPageChange}
            />
        </>
    );
};

export default BenefitsList;
