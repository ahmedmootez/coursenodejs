const http=require('http');

const server=http.createServer((req,res)=>{

res.write("ahmed mootez")
res.end()


})

server.listen(3000)