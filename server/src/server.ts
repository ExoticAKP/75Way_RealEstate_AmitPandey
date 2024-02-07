import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import {connectDB} from './db'
import bodyParser from "body-parser";
import { error } from "console";
import cors from 'cors';


const corsOptions={
  origin:"*"
}
dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded());
const port = process.env.PORT || 3000;

app.post("/signup", (req: Request, res: Response) => {
  const {name, email, password}=req.body;
  const found=connectDB().db('Users').collection('UsersData').findOne({email:email});
  found.then((response:any)=>{
    if(!response){
      const user={
        "name":name,
        "email":email,
        "password":password
      }

      connectDB().db('Users').collection('UsersData').insertOne(user);
      
      res.send(name);
    }
    else{
      res.send('');
    }
  })
  .catch((error)=>{
    res.send(error);
  })
  
  
});
app.post("/login", (req: Request, res: Response) => {
  const {email, password}=req.body;
  const found=connectDB().db('Users').collection('UsersData').findOne({email:email});
  found.then((response:any)=>{
    if(!response){
      res.send('');
    }
    else{
      if(response.email===email && response.password===password){
        res.send(response.name);
      }
      else{
        res.send('Invalid Credentials');
      }
    }
  })
  .catch((error)=>{
    res.send(error);
  })
  
  
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});