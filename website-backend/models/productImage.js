const mongoose = require('mongoose');


const productImages = mongoose.Schema({
    img:{
        type: Buffer,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }
    
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const ProductImages = mongoose.model('productImages' , productImages);
module.exports = ProductImages;