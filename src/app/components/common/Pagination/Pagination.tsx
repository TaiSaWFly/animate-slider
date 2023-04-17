import React from "react";
import style from "./pagination.module.scss";
import { ReactComponent as ShevronRigth } from "../../../../assets/svg/shevron-rigth.svg";
import { ReactComponent as ShevronLeft } from "../../../../assets/svg/shevron-left.svg";
import generateRange from "../../../utils/generataRange";

interface PaginationProps {
    itemsCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (pageIndex: number) => void;
    onPrevPageChange: () => void;
    onNextPageChange: (pageLength: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
    onPrevPageChange,
    onNextPageChange
}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    const pages = generateRange(1, pageCount);

    return (
        <div className={style.pagination}>
            <div
                className={style.pagination_shevron}
                onClick={onPrevPageChange}
            >
                <ShevronLeft className={style.pagination_shevron__icon} />
            </div>

            <ul className={style.pagination_list}>
                {pages.map((page) => (
                    <li
                        key={"page_" + page}
                        className={style.pagination_list__item}
                    >
                        <span
                            onClick={() => onPageChange(page)}
                            className={
                                page === currentPage
                                    ? style.pagination_list__item_dot__active
                                    : style.pagination_list__item_dot
                            }
                        ></span>
                    </li>
                ))}
            </ul>

            <div
                className={style.pagination_shevron}
                onClick={() => onNextPageChange(pages.length)}
            >
                <ShevronRigth className={style.pagination_shevron__icon} />
            </div>
        </div>
    );
};

export default Pagination;
