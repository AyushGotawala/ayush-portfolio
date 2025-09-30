import mongoose from 'mongoose';
import app from "./src/app.js";
const port = process.env.PORT || 3000;
const localport = process.env.LOCAL_PORT;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Mongo DB connectivity Done...');
    app.listen(port,'0.0.0.0',()=>{
        console.log(`Your Application is Runnig on http://localhost:${port}`);
        console.log(`application is Runnin on http://${localport}:${port}`);
    });
}).catch((error) =>{
    console.log('Error in Connection with Mongodb');
})