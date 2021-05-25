const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const value  = require('../models/values'); 

router.post('/add-value', auth  ,async(req,res)=>{
    try{
        const data = new value(req.body)

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

router.get('/get-values', auth , async(req,res)=>{
    
    try{
        const data = await value.find({});
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

router.get('/website-get-values' , async(req,res)=>{
    
    try{
        const data = await value.find({});
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
router.get('/get-value/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await value.findById(id);
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


router.get('/get-value-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await value.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.value_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-value-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await value.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.value_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-value/:id', auth , async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await value.findByIdAndUpdate(
            id, 
            req.body,
            {new:true , runValidators:true , useFindAndModify:false}
        )
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

router.delete('/delete-value/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await value.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that value'
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