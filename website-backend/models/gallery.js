const mongoose = require('mongoose');


const gallery = mongoose.Schema({
    gallery_img:{
        type: Buffer ,
        required: true
    },
    english_header: {
        type: String,
        required: true
    },
    arabic_header: {
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

const Gallery = mongoose.model('gallery' , gallery);
module.exports = Gallery;