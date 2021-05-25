const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const gallery  = require('../models/gallery'); 
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

router.post('/add-gallery-image', auth , upload.single('gallery_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new gallery({
            gallery_img: buffer , 
            english_header: req.body.english_header,
            arabic_header: req.body.arabic_header,
            order: req.body.order
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

router.get('/get-gallery-images', auth , async(req,res)=>{
    
    try{
        const data = await gallery.find({});
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

router.get('/website-get-gallery-images' , async(req,res)=>{
    
    try{
        const data = await gallery.find({});
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
router.get('/get-gallery-image/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await gallery.findById(id);
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


router.get('/website-get-gallery-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await gallery.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.gallery_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})


router.get('/get-gallery-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await gallery.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.gallery_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-gallery-image/:id', auth , upload.single('gallery_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new gallery({gallery_img:buffer})
        console.log(req.body)
        const data = await gallery.findByIdAndUpdate(
            id, 
            {
                gallery_img:req.file.buffer,
                english_header: req.body.english_header,
                arabic_header: req.body.arabic_header,
                order: req.body.order
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

router.delete('/delete-gallery-image/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await gallery.findByIdAndDelete(id);
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