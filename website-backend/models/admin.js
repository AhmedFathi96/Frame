const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const validator = require('validator');

const admin = mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
        }
    }
    },
    password:{
        type:String,
        required:true,

    },
      // Kepp trace od user tokens
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
}, {timestamps: true})



admin.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id.toString()} , 'FuckersYouKNowNothing');
    this.tokens =  this.tokens.concat({token});
    await this.save()
    return token;
}

admin.statics.findUserByCredentials = async (name , password) =>{
    const admin_info = await Admin.findOne({name:name , password:password});
    if(!admin_info){
        throw new Error('The user does not exists')
    }
    return admin_info;
}

mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Admin = mongoose.model('admin' , admin);
module.exports = Admin;