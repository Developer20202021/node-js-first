// const mathLib = require('./math.js');
// const fileS = require('fs');
// const http = require('http');
// const path = require('path');
// // console.log(mathLib);
// const fileName = __filename;
// // console.log(fs.extname(fileName));
// const array =['user','local','index.js'];
// console.log(path.join('user','local','index.js'));
// console.log(path);
// const os = require('os');
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.totalmem());
// console.log(os.type());


    // file write

// const myObj ={
//     name:'mahadi',
//     age:22,
//     year:2021
// }
// const data = JSON.stringify(myObj);
// fileS.writeFile('text.json',data,(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log('file write succesfully');
//     }
// })

        // file read 

// fileS.readFile('text.json',(err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//     const obj = JSON.parse(data);
//     console.log(obj);
//     }
// })

// const server =http.createServer((req, res) =>{
//     console.log(req.url);
//     res.end(`<h1>Hello Node JS</h1>`);

// })
// server.listen(4000, () =>{
//     console.log('my server is running now');
// })
