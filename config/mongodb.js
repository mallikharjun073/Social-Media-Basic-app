import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb"

const connectToMongoDb = ()=>{
    MongoClient.connect(url).then(client=>{
        console.log("Mongo Db Connected");
    }).catch(err=>{
        console.log(err);
    })
}

export default connectToMongoDb;