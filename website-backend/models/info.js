const mongoose = require('mongoose');
const validator = require('validator');
const info = mongoose.Schema({
    contact_img:{
        type: Buffer ,
        required: true
    },
    whoAreWe_english_header:{
        type: String,
        required: true
    },
    whoAreWe_arabic_header:{
        type: String,
        required: true
    },

    vision_english_header:{
        type: String,
        required: true
    },
    vision_arabic_header:{
        type: String,
        required: true
    },
    history_english_header:{
        type: String,
        required: true
    },
    history__arabic_header:{
        type: String,
        required: true
    },
    values_english_header:{
        type: String,
        required: true
    },
    values__arabic_header:{
        type: String,
        required: true
    },



    gallery_english_header:{
        type: String,
        required: true
    },
    gallery_arabic_header:{
        type: String,
        required: true
    },


    projects_english_header:{
        type: String,
        required: true
    },
    projects_arabic_header:{
        type: String,
        required: true
    },


    group_english_header:{
        type: String,
        required: true
    },
    group_arabic_header:{
        type: String,
        required: true
    },

    group_english_sub_header:{
        type: String,
        required: true
    },
    group_arabic_sub_header:{
        type: String,
        required: true
    },

    group_english_content:{
        type: String,
        required: true
    },
    group_arabic_content:{
        type: String,
        required: true
    },


    companies_english_header:{
        type: String,
        required: true
    },
    companies_arabic_header:{
        type: String,
        required: true
    },


    contact_english_header:{
        type: String,
        required: true
    },
    contact_arabic_header:{
        type: String,
        required: true
    },

    contact_english_sub_header:{
        type: String,
        required: true
    },
    contact_arabic_sub_header:{
        type: String,
        required: true
    },

    english_address:{
        type: String,
        required: true
    },
    arabic_address:{
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
    arabic_submitting_message:{
        type: String,
        required: true
    },
    english_submitting_message:{
        type: String,
        required: true
    },
    facebook_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    youtube_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    twitter_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    instagram_url:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    whatsapp_number:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },
    
    footer_copyrights:{                                  // Role could be infoistrator  or supervisor
        type: String,
        required: true,
    },

    
    
}, {timestamps: true})




mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Info = mongoose.model('info' , info);
module.exports = Info;