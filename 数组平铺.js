// 多维数组的平铺

function flatten1(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatten1([1, 2, 3, [4, 5], [6, [7, [8]]]]));


function flatten2(arr) {
    let flatArr = [];
    const _arr = arr;
    const _flatten = function (_arr) {
        _arr.forEach(item => {
            if(Array.isArray(item)) {
                _flatten(item);
            } else {
                flatArr.push(item);
            }
        });
    }
    _flatten(_arr);
    return flatArr;
}

console.log(flatten2([1, 2, 3, [4, 5], [6, [7, [8]]]]));
