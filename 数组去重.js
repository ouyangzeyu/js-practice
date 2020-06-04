/**
 * @feature 实现几种数组去重的方法
 */

function removeDuplicate1(arr) {
    return Array.from(new Set(arr))
}

function removeDuplicate2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j--, 1)
            }
        }
    }
}

// 原理类似于indexof的方式
function removeDuplicate3(arr) {
    const myArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!myArr.includes(arr[i])) {
            myArr.push(arr[i])
        }
    }
    return myArr
}

function removeDuplicate4(arr) {
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index
    })
}