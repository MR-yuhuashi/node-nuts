
// var r = new Promise(function(resolve, reject){
//   console.log("a");
//   resolve()
// });
// r.then(() => console.log("c"));
// console.log("b")
// // a b c



// // 微任务优先执行于宏任务
// var r = new Promise(function(resolve, reject){
//   console.log("a");
//   resolve()
// });
// setTimeout(()=>console.log("d"), 0) // 浏览器API 宏任务
// r.then(() => console.log("c")); // js引擎内部的微任务
// console.log("b");
// // a b c d


// setTimeout(()=>console.log("d"), 0)
// var r = new Promise(function(resolve, reject){
//     resolve()
// });
// r.then(() => { 
//     var begin = Date.now();
//     while(Date.now() - begin < 1000);
//     console.log("c1") 
//     new Promise(function(resolve, reject){
//         resolve()
//     }).then(() => console.log("c2"))
// });



function showThis(){
  console.log(this);
}

var o = {
  showThis: showThis
}

showThis(); // global
o.showThis(); // o