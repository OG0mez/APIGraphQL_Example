import mongoose from 'mongoose';
const {DB_URL} = process.env;
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);



module.exports = mongoose;


