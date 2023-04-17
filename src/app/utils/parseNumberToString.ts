const parseNumberToString = (num: number): string => {
    return num <= 9 ? `0${num}` : `${num}`;
};

export default parseNumberToString;
