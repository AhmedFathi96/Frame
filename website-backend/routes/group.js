const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const group  = require('../models/group'); 

router.post('/add-group', auth  ,async(req,res)=>{
    try{
        const data = new group(req.body)

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

router.get('/get-groups', auth , async(req,res)=>{
    
    try{
        const data = await group.find({});
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

router.get('/website-get-groups' , async(req,res)=>{
    
    try{
        const data = await group.find({});
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
router.get('/get-group/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await group.findById(id);
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


router.get('/get-group-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await group.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.group_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-group-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await group.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.group_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-group/:id', auth , async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await group.findByIdAndUpdate(
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

router.delete('/delete-group/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await group.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that group'
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