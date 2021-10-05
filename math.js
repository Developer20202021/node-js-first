const add = (a, b) =>a+b;
const sub = (a, b) =>a-b;
const div = (a, b) => a/b;
const total =(a, b) =>{
   return add(a,b) + sub(a, b) + div(a, b);
}
module.exports= total;
// console.log(module);
// console.log(__filename);