const generateRange = (startCount: number, count: number): number[] => {
    const range = [];
    for (let i = startCount; i <= count; i++) {
        range.push(i);
    }
    return range;
};

export default generateRange;
