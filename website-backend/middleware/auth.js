const jwt = require('jsonwebtoken');
const admin = require('../models/admin');

const auth = async (req,res,next) =>{
    try{
        const token   = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token , 'FuckersYouKNowNothing');
        const admin_info    = await admin.findOne({_id:decoded._id , 'tokens.token':token});
        if(!admin_info){
            throw new Error('')
        }
        req.admin  = admin_info;
        req.token  = token;
        next();
    }catch(err){
        res.status(401).send({
            error: 'Authentication Failed'
        })
    }
}

module.exports = auth; 