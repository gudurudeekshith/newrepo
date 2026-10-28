import {MongoClient} from "mongodb"
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
async function connectDB(){
    try{
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        const db=client.db('college');
        console.log("Database selected: "+db.databaseName);
    }
    catch(error){
        console.log("Connection failed:",error);
    }
    finally{
        await client.close();
    }
}
connectDB();