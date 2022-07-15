const http = require('http');
const host = 'http://localhost';
const port = 8000;
const stats = require('./PcRamUsage');

http.createServer((req, res)=>{
  let url = req.url;
  if (url === '/stats'){
    res.end(JSON.stringify(stats, null, 2));
  }else{
    res.write('<h1>Bem vindo </h1>')
    res.end();
  }
  
}).listen(port, ()=> console.log(`Servidor iniciado em ${host}:${port}`));
