// 模拟js中通过new + 构造函数创建对象，理解其过程和原理

/**
 * @param {Function} Constructor 构造函数
 * @param {any} params 创建对象需要的入参
 */
const myNew = function (Constructor, ...params) {
    // 以构造器的prototype为原型创建一个新的对象
    let child = Object.create(Constructor.prototype) // child是一个新对象并继承了构造器的原型
    // 将this指向到新的child对象并执行构造函数
    let result = Constructor.apply(child, params)
    // 如果构造函数没有返回对象，则返回child对象
    return typeof result === 'object' ? result : child
}

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

const xiaoming = myNew(Person, '小明', 18)
console.log(xiaoming instanceof Person)
xiaoming.sayName()
