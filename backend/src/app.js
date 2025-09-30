import express from "express";
import contactRoute from "./routes/contactRouter.js"
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send('Server is running on local network!');
})

app.use('/api',contactRoute);

export default app;