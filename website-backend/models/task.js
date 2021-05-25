const mongoose = require('mongoose')

const task = mongoose.Schema({
    title:{
        type:String,
        trim:true,
      //  required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    
    consultant:{
        type:String
    },
    owner:{
        type:String
    },
    location:{
        type:String
    }, 
    img:{
        type: Buffer
    }
}, {timestamps: true})

mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const Task = mongoose.model("task",task)
module.exports = Task