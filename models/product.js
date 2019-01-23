import mongoose from '../db/db'
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title :{
        type:String,
        require:true
    },
    qty:{
        type:Number
    }
});


export default mongoose.model('product',productSchema);
