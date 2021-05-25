const express = require('express')
const router  = express.Router();
const auth    = require('../middleware/auth');
const multer  = require('multer');
const slider  = require('../models/slider'); 
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

router.post('/add-slider', auth , upload.single('slider_img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new slider({
            slider_img:buffer,
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

router.get('/get-sliders', auth , async(req,res)=>{
    
    try{
        const data = await slider.find({});
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

router.get('/website-get-sliders' , async(req,res)=>{
    
    try{
        const data = await slider.find({});
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
router.get('/get-slider/:id', auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await slider.findById(id);
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


router.get('/get-slider-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await slider.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.slider_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-slider-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await slider.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.slider_img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-slider/:id', auth , upload.single('slider_img'), async (req,res)=>{
    try{
        const id = req.params.id;
        // const newData = new slider({slider_img:buffer,caption: req.body.caption})
        console.log(req.body)
        const data = await slider.findByIdAndUpdate(
            id, 
            {
                slider_img: req.file.buffer,
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

router.delete('/delete-slider/:id',auth , async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await slider.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that slider'
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