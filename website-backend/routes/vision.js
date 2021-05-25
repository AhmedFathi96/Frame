const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const vision  = require('../models/vision'); 
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

router.post('/add-vision', auth , upload.single('vision_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new vision({
            vision_img:buffer,
            english_header: req.body.english_header,
            arabic_header: req.body.arabic_header,
            
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

router.get('/get-visions', auth , async(req,res)=>{
    
    try{
        const data = await vision.find({});
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

router.get('/website-get-vision' , async(req,res)=>{
    
    try{
        const data = await vision.find({});
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
router.get('/get-vision/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await vision.findById(id);
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


router.get('/get-vision-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await vision.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.vision_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-vision-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await vision.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.vision_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-vision/:id', auth , upload.single('vision_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await vision.findByIdAndUpdate(
            id, 
            {
                vision_img: req.file.buffer,

                english_header: req.body.english_header,
                arabic_header: req.body.arabic_header,


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

router.delete('/delete-vision/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await vision.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that vision'
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