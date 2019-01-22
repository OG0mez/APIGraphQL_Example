require('dotenv').config();
import express from 'express';
const app = express();
const {PORT} = process.env;
app.get('/',(req,res)=>{
    res.json({
        msg:'welcome to graphQL'
    });
});



app.listen(PORT,()=>{
    console.log(`running on port: ${PORT}`)
})