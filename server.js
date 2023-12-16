import connectToMongoDb from './config/mongodb.js';
import server from './index.js'
server.listen(3100,(err) =>{
    if(!err){
        connectToMongoDb()
        console.log('server running at 3100')
    }
});