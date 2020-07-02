const findPair = (arrayOfNum: number[], sum: number) => {
    const mySet = new Set(arrayOfNum);
    let output = new Array();
    let controlSet = new Set();
    for (var elem of mySet) {
        let pair = sum - elem;
        if (mySet.has(pair) && !controlSet.has(elem)) {
            controlSet.add(pair);
            output.push([elem, pair]);
        };
    };
    return output;
};

export default findPair;