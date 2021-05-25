const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const about  = require('../models/about'); 
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

// This Method used by Ahmed Fathi only
router.post('/create-about', auth , upload.single('about_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new about({
            about_img:buffer,
            english_header: req.body.english_header,
            arabic_header: req.body.arabic_header,
    
            english_content: req.body.english_content,
            arabic_content: req.body.arabic_content
            
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

router.get('/get-about', auth , async(req,res)=>{
    
    try{
        const data = await about.find({});
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

router.get('/website-get-about' , async(req,res)=>{
    
    try{
        const data = await about.find({});
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

router.get('/website-get-about-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await about.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.about_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-about-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await about.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.about_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-about/:id', auth , upload.single('about_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new about({about_img:buffer,caption: req.body.caption})
        console.log(req.body)
        const data = await about.findByIdAndUpdate(
            id, 
            {
                about_img:req.file.buffer , 
                english_header: req.body.english_header,
                arabic_header: req.body.arabic_header,
                english_content: req.body.english_content,
                arabic_content: req.body.arabic_content,
        
                
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

router.delete('/delete-about/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await about.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that gallery'
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