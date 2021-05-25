const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const pages  = require('../models/pages'); 



router.post('/create-pages', auth ,async(req,res)=>{

    try{
        const data = new pages(req.body)
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


router.get('/website-get-pages' , async(req,res)=>{
    
    try{
        const data = await pages.find({});
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

router.get('/get-all-pages', auth , async(req,res)=>{
    try{
        const data = await pages.find({});
        res.status(200).send({
            status:'success',
            data: data
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})


router.put('/update-pages/:id', auth , async (req,res)=>{
    try{

        const id = req.params.id;
        const data = await pages.findByIdAndUpdate(id, req.body ,{new:true , runValidators:true , useFindAndModify:false})

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



module.exports = router;