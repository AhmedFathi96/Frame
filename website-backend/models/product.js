const mongoose = require('mongoose')

const product = mongoose.Schema({
    title:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
}

)

mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Product = mongoose.model("product",product)
module.exports = Product