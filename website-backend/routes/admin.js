const express = require('express')
const router  = express.Router();
const admin   = require('../models/admin'); 
const auth    = require('../middleware/auth');


router.post('/create-admin', auth , async(req,res)=>{
    
    try{
        const data = new admin(req.body);
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

router.post('/first-create-admin' , async(req,res)=>{
    
    try{
        const data = new admin(req.body);
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

router.get('/get-admins', auth , async(req,res)=>{
    
    try{
        const data = await admin.find({});
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
router.get('/get-admin/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await admin.findById(id);
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

router.put('/update-admin/:id', auth , async (req,res)=>{
    try{
        const id = req.params.id;
        const updates = Object.keys(req.body)
        const allowed_updates = ['name' , 'password' , 'email' , 'role'];
        const is_valid = updates.every((up)=>{allowed_updates.includes(up)});
        console.log('===>' , updates , is_valid)
        if(is_valid){
            res.status(400).send('Invalid property');
        }
        const data = await admin.findByIdAndUpdate(id, req.body ,{new:true , runValidators:true , useFindAndModify:false})
        if(!data){
            return res.status(400).send({
                status:'Error',
                Error: 'Something wrong'
            })
        }
        res.status(200).send({
            status: 'success',
            data: data
        })

    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }

})

router.delete('/delete-admin/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await admin.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that admin'
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