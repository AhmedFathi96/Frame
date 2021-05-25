const express = require('express')
const router  = express.Router();
const contact   = require('../models/contact'); 
const auth    = require('../middleware/auth')

router.post('/create-contact', auth , async(req,res)=>{
    
    try{
        const data = new contact(req.body);
        console.log(data,req.body);
        await data.save();
        res.status(200).send({
            status:'success',
            data:req.body
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.post('/website-create-contact' , async(req,res)=>{
    
    try{
        const data = new contact(req.body);
        console.log(data,req.body);
        await data.save();
        res.status(200).send({
            status:'success',
            data:req.body
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-contacts', auth , async(req,res)=>{
    
    try{
        const data = await contact.find({});
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})
router.get('/get-contact/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await contact.findById(id);
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.delete('/delete-contact/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await contact.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that contact'
            });
        }
        res.status(200).send({
            status:'success',
            data:data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})
module.exports = router;