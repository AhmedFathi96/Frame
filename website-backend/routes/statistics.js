const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const statistic  = require('../models/statistics'); 
const sharp   = require('sharp')


const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload and image with jpg or jpeg or png extension'))
        }

        cb(undefined , true)
    }
})

router.post('/add-statistic', auth , upload.single('statistic_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new statistic({
            statistic_img:buffer,
            header: req.body.header,
        
            order: req.body.order,
            english_sub_header:req.body.english_sub_header,
            arabic_sub_header:req.body.arabic_sub_header,
        
        })

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

router.get('/get-statistics', auth , async(req,res)=>{
    
    try{
        const data = await statistic.find({});
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

router.get('/website-get-statistics' , async(req,res)=>{
    
    try{
        const data = await statistic.find({});
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
router.get('/get-statistic/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await statistic.findById(id);
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


router.get('/get-statistic-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await statistic.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.statistic_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-statistic-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await statistic.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.statistic_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-statistic/:id', auth , upload.single('statistic_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new statistic({statistic_img:buffer,caption: req.body.caption})
        console.log(req.body)
        const data = await statistic.findByIdAndUpdate(
            id, 
            {
                statistic_img:buffer,
                header: req.body.header,
            
                order: req.body.order,
                english_sub_header:req.body.english_sub_header,
                arabic_sub_header:req.body.arabic_sub_header,
            
            },
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

router.delete('/delete-statistic/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await statistic.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that statistic'
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