import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config();
const connectDB=()=>{
    const uri=process.env.MONGO_URI as string;
    const connect=new MongoClient(uri);
    return connect
}
export {connectDB}
