const mongoose = require('mongoose');


const history = mongoose.Schema({

    english_date: {
        type: String,
        required: true
    },
    arabic_date: {
        type: String,
        required: true
    },

    english_content: {
        type: String,
        required: true
    },
    arabic_content: {
        type: String,
        required: true
    },
    order:{
        type: String,
        required: true
    }
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const History = mongoose.model('history' , history);
module.exports = History;