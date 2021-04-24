console.log('Hello World!');
function add(a,b){
    return a+b;
}
console.log(add(10,2));
console.log(process.argv);
var args=process.argv.slice(2);
console.log('Adding the numbers:',add(parseInt(args[0]) ,parseInt(args[1])));
// const http=require('http');
// const port=800;
// function requestHandler(req,res){
//     console.log(req.url);
//     return res.end("HEllo");
// }
// const server=http.createServer()
// server.listen(port,function(err){
//     if(err){
//         console.log('there is error',err);
//         return res.end('Error');
//     }
//   console.log('server is runnig fine',port);
// });