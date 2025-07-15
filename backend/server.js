const express = require("express");
const contactRoute = require("./routes/contactRouter");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 3000;
const localport = process.env.LOCAL_PORT;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/',(req,res,next)=>{
    res.send('Server is running on local network!');
})

app.use('/api',contactRoute);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Mongo DB connectivity Done...');
    app.listen(port,'0.0.0.0',()=>{
        console.log(`Your Application is Runnig on http://localhost:${port}`);
        console.log(`application is Runnin on http://${localport}:${port}`);
    });
}).catch((error) =>{
    console.log('Error in Connection with Mongodb');
})