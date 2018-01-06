//这里不能用箭头函数
function Hello() {
    var name;
    this.setName = (setname) => {
        name = setname;
    };
    this.sayHello = (str) => {
        console.log(`${name} say hello, ${str}`);
    };
};

//require和exports已经是老古董了，所以用ES6的语法高亮会报错
module.exports = Hello;

// exports.world = function(){
//     console.log('hello,module')
// }