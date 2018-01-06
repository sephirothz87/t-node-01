/*nodejs只能处理字符串流，不能处理字节流
 *使用buffer来处理字节流
 */


// const buf = Buffer.from('runoob', 'ascii');
//
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));
//
// // 输出 cnVub29i
// console.log(buf.toString('base64'));


// // 输出 14
// // 输出 www.runoob.com
// buf = Buffer.alloc(256);
// // 输出 8
// // 输出 www.runo
buf = Buffer.alloc(8);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);

console.log(buf.toString());



console.log(buf.toJSON());
//输出
// { type: 'Buffer',
//     data: [ 119, 119, 119, 46, 114, 117, 110, 111 ] }