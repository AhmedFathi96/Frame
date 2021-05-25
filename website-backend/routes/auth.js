const express  = require('express')
const router   = express.Router();
const admin    = require('../models/admin'); 
const auth     = require('../middleware/auth');

router.post('/login', async(req,res)=>{
    
    try{
        const admin_info = await admin.findUserByCredentials(req.body.name , req.body.password);
        const token      = await admin_info.generateToken();
        res.status(200).send({
            status:'Success',
            data: {
                admin: admin_info,
                token: token
            }
        })
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        })
    }
});

router.post('/logout', auth , async(req,res)=>{
    try {
        req.admin.tokens = req.admin.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.admin.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
});
module.exports = router;