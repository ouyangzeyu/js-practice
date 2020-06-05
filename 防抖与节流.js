/**
 * @思路 在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms
 * @效果 如果短时间内大量触发同一事件，只会执行一次函数。
 * @param {function} fn 具体的执行函数
 * @param {number} delay 需要延迟的毫秒数
 */
function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) { // 如果计时器存在，则说明用户在时间间隔内连续操作，需要清空计时器重新开启
            clearTimeout(timer)
        }
        // 当计时器不存在时，则进入函数执行体并生成新的计时器
        timer = setTimeout(fn, delay)
    }
}

/**
 * @思路 让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活。
 * @效果 如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。
 * @param {function} fn 具体的执行函数
 * @param {number} delay 需要延迟的毫秒数
 */
function throttle(fn, delay) {
    let timer = null
    return function () {
        if (timer) { // 如果timer存在，就说明计时器在工作中，这时候应该让函数无效
            return false
        }
        // 当计时器为空的时候，说明可以进入到下一轮函数执行段了
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
        }, delay)
    }
}
