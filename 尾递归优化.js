// 函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。所以在常规的递归中容易出现爆栈的情况。
// 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了

// 常规递归计算阶乘
function fac(n) {
    if (n === 1) return 1;
    return n * fac(n - 1);
}
console.log(fac(5));

// 尾递归优化后
function _fac(n, total) {
    if (n === 1) return total;
    return _fac(n - 1, n * total);
}
console.log(_fac(5, 1));


// 常规递归计算斐波那契数列
function fibo(n) {
    if (n <= 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(9));

// 尾递归优化
function _fibo(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) { return ac2 };
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
