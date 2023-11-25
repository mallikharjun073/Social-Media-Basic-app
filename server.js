import server from './index.js'
server.listen(3100,(err) =>{
    if(!err){
        console.log('server running at 3100')
    }
});