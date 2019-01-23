import Product from './models/product';
export const resolvers ={
    Query: {
        async allProducts(){
            try {
                return await Product.find();
            } catch (error) {
                return error;
            }
            
            
            
        }
    }
}