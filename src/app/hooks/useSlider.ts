import React, { useState } from "react";
import { PAGE_WIDTH } from "../data/variables";

const initialStartTouchState = { x: 0 };

export const useSlider = (pageLength: number) => {
    const [offset, setOffset] = useState(0);
    const [startTouch, setStartTouch] = useState(initialStartTouchState);
    const [blockActions, setBlockActions] = useState(false);

    const calcPageWidth = (): number => {
        return PAGE_WIDTH * pageLength;
    };

    const getCurrentSlide = () => {
        return Math.abs(offset / PAGE_WIDTH);
    };

    const blockSliderActions = (isBlock: boolean) => {
        setBlockActions(isBlock);
    };

    const handleToMainSlide = () => {
        if (blockActions) return;
        setOffset(0);
    };

    const handleLeftSlides = () => {
        if (blockActions) return;
        const newOffset = offset + PAGE_WIDTH;
        setOffset(Math.min(newOffset, 0));
    };

    const handleRigthSlides = () => {
        if (blockActions) return;
        const newOffset = offset - PAGE_WIDTH;
        const maxOffset = -(PAGE_WIDTH * (pageLength - 1));

        setOffset(Math.max(newOffset, maxOffset));
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (blockActions) return;
        setStartTouch({ x: e.touches[0].clientX });
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (blockActions) return;
        if (startTouch.x === 0) return;

        const x = e.touches[0].clientX;
        const xDiff = x - startTouch.x;

        xDiff > 0 ? handleLeftSlides() : handleRigthSlides();

        setStartTouch(initialStartTouchState);
    };

    return {
        offset,
        PAGE_WIDTH,
        calcPageWidth,
        handleToMainSlide,
        handleLeftSlides,
        handleRigthSlides,
        handleTouchStart,
        handleTouchMove,
        getCurrentSlide,
        blockSliderActions
    };
};
