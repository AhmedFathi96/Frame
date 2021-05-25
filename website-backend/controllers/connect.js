const mongoose = require('mongoose');


const url = 'mongodb+srv://ahmedfathi77:Meow@123@frame.fv7na.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:27017/<dbname>';

const Connect = async ()=>{
    await mongoose.connect(url ,
        {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
    console.log('DB Successfully Connected');
}

module.exports = Connect;