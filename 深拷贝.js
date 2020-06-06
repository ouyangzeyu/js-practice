/**
 * 
 * @param {object} obj 需要被深拷贝的对象
 * 这种方式虽然简单，但是只适用于对象中属性的值是基本数据类型，否则无法做到全面拷贝 
 */
function deepClone1(obj) {
    let _obj = JSON.parse(JSON.stringify(obj))
    return _obj
}

/**
 * @param {object} obj 需要被深拷贝的对象
 * 通过递归的方式
 */
function deepClone2(obj) {
    // 判断目标对象的类型
    let _obj = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object')
        for (key in obj) {
            if (obj[key] && typeof obj[key] === 'object') {
                _obj[key] = deepClone2(obj[key])
            } else {
                _obj[key] = obj[key]
            }
        }
    return _obj
}

// 通过assign的方式
function deepClone3(obj) {
    let _obj = Object.assign({}, obj)
    return _obj
}
