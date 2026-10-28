import MongoClient from "mongodb"
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
async function perfromOperations(){
    try{
        await client.connect();
        console.log("Connected to MongoDB successfully");
        const db=client.db('college');
        const collection=db.collection('students');
        await collection.insertOne({
            rollno:279,
            name:"Deekshith",
            department:"CSE"
        });
        console.log("Documet inserted successfully");
        let students=await collection.find({}).toArray();
        console.log("Student records:",students);
        await collection.updateOne(
            {rollno:279},{$set:{name:'G.Deekshith'}}
        );
        console.log("Document inserted succeefully!");
        students=await collection.find({}).toArray();
        console.log("Records after update:",students);
        await collection.deleteOne({rollno:279});
        console.log("Document deleted successfully!");
        students=await collection.find({}).toArray();
        console.log("Records after delection:",students);
    }
    catch(error){
        console.log.error("Error:",error);
    }
    finally{
        await client.close();
    }
}
perfromOperations();