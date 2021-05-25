const mongoose = require('mongoose');


const feature = mongoose.Schema({
    feature_img:{
        type: Buffer 
    },
    english_header: {
        type: String,
        required: true
    },
    arabic_header: {
        type: String,
        required: true
    },


    english_sub_header: {
        type: String,
        required: true
    },
    arabic_sub_header: {
        type: String,
        required: true
    },

    order:{
        type: Number,
        required: true
    }
    
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Feature = mongoose.model('feature' , feature);
module.exports = Feature;