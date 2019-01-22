const app = require('./app');
const {PORT} = process.env;

app.get('/',(req,res)=>{
    res.json({
        msg: 'welcome to graphQL'
    })
});


app.listen(PORT,console.log(`server running on port: ${PORT}`));