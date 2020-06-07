// 实现一个instanceof的方法
function instance_of(instance, constructor) {
    let a = instance.__proto__
    let b = constructor.prototype
    while(true) {
        if (a == null) {
            return false
        }
        // 如果相等，直接返回true，否则继续往上查找__proto__和构造函数的prototype是否相等，直到检索完整个原型链到达了null就停止了循环返回false
        if (a === b) {
            return true
        } else {
            a = a.__proto__
        }
    }
}

class Person {
    constructor() {
        this.name = '小红'
    }
}

class Car {
    constructor() {
        this.name = '宝马'
    }
}

let person = new Person()

console.log(person instanceof Person)
console.log((instance_of(person, Person)))
console.log((instance_of(person, Car)))
console.log(person instanceof Object)
console.log((instance_of(person, Object)))
