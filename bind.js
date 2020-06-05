// 实现一个bind方法，核心就是bind会返回一个匿名函数，匿名函数中会执行call或者apply
Function.prototype.bind = function (context = window, ...arguments) {
    // bind中的this是要操作的函数，在这里先保存一下
    let _this = this
    let params = arguments
    return function () {
        _this.apply(context, params)
    }
}
