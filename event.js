//同时有两个回调时会按顺序执行
// listener1 arg1 参数 arg2 参数
// listener1 arg1 参数 arg2 参数
// listener1 arg1 参数 arg2 参数
// listener1 arg1 参数 arg2 参数
// listener1 arg1 参数 arg2 参数
// listener1 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数

//event.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
    console.log('listener1', arg1, arg2); 
    console.log('listener1', arg1, arg2); 
    console.log('listener1', arg1, arg2); 
    console.log('listener1', arg1, arg2); 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 