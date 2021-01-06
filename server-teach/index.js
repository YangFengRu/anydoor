const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url==='/home') {
        var template=fs.readFileSync('./template/detail.html');
        res.end(template);
    }else  if(req.url==='/detail'){
        var readstream = fs.createReadStream('./template/detail.html');
        readstream.pipe(res);
        // res.end('详情');
    }else{
        const readstream = fs.readFileSync('./template/index.css');
        res.setHeader('content-type','text/css;charset=utf-8');
        res.end(readstream);
    }
    

});
server.listen(8080);