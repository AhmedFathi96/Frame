const mongoose = require('mongoose');
const validator = require('validator');

const contact = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: false,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please Enter correct email')
            }
        }
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    
    
}, {timestamps: true})



mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Contact = mongoose.model('contact' , contact);
module.exports = Contact;