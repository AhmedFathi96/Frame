const express = require('express')
const router  = express.Router();
const info   = require('../models/info'); 
const auth    = require('../middleware/auth')
const multer  = require('multer');
const project  = require('../models/project'); 
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


router.post('/create-info', auth , upload.single('contact_img') , async(req,res)=>{
    
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const data = new info({
            contact_img:buffer,
            whoAreWe_english_header:req.body.whoAreWe_english_header,
            whoAreWe_arabic_header:req.body.whoAreWe_arabic_header,
        
            vision_english_header:req.body.vision_english_header,
            vision_arabic_header:req.body.vision_arabic_header,
            history_english_header:req.body.history_english_header,
            history__arabic_header:req.body.history__arabic_header,
            values_english_header:req.body.values_english_header,
            values__arabic_header:req.body.values__arabic_header,
            gallery_english_header:req.body.gallery_english_header,
            gallery_arabic_header:req.body.gallery_arabic_header,
            projects_english_header:req.body.projects_english_header,
            projects_arabic_header:req.body.projects_arabic_header,
            group_english_header:req.body.group_english_header,
            group_arabic_header:req.body.group_arabic_header,
            group_english_sub_header:req.body.group_english_sub_header,
            group_arabic_sub_header:req.body.group_arabic_sub_header,
            group_english_content:req.body.group_english_content,
            group_arabic_content:req.body.group_arabic_content,
            companies_english_header:req.body.companies_english_header,
            companies_arabic_header:req.body.companies_arabic_header,
            contact_english_header:req.body.contact_english_header,
            contact_arabic_header:req.body.contact_arabic_header,
            contact_english_sub_header:req.body.contact_english_sub_header,
            contact_arabic_sub_header:req.body.contact_arabic_sub_header,
            english_address:req.body.english_address,
            arabic_address:req.body.arabic_address,
            email:req.body.email,
            phone:req.body.phone,
            arabic_submitting_message:req.body.arabic_submitting_message,
            english_submitting_message:req.body.english_submitting_message,
            facebook_url:req.body.facebook_url,
            youtube_url:req.body.youtube_url,
            twitter_url:req.body.twitter_url,
            instagram_url:req.body.instagram_url,
            whatsapp_number:req.body.whatsapp_number,
            footer_copyrights:req.body.footer_copyrights,
            
        });
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

router.get('/get-info', auth , async(req,res)=>{
    
    try{
        const data = await info.find({});
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
router.get('/website-get-info' , async(req,res)=>{
    
    try{
        const data = await info.find({});
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

router.put('/update-info/:id', auth , upload.single('contact_img'), async (req,res)=>{
    try{

        const id = req.params.id;
        // const newData = new slider({slider_img:buffer,caption: req.body.caption})
        const data = await info.findByIdAndUpdate(id, {
            contact_img: req.file.buffer,
            whoAreWe_english_header:req.body.whoAreWe_english_header,
            whoAreWe_arabic_header:req.body.whoAreWe_arabic_header,
        
            vision_english_header:req.body.vision_english_header,
            vision_arabic_header:req.body.vision_arabic_header,
            history_english_header:req.body.history_english_header,
            history__arabic_header:req.body.history__arabic_header,
            values_english_header:req.body.values_english_header,
            values__arabic_header:req.body.values__arabic_header,
            gallery_english_header:req.body.gallery_english_header,
            gallery_arabic_header:req.body.gallery_arabic_header,
            projects_english_header:req.body.projects_english_header,
            projects_arabic_header:req.body.projects_arabic_header,
            group_english_header:req.body.group_english_header,
            group_arabic_header:req.body.group_arabic_header,
            group_english_sub_header:req.body.group_english_sub_header,
            group_arabic_sub_header:req.body.group_arabic_sub_header,
            group_english_content:req.body.group_english_content,
            group_arabic_content:req.body.group_arabic_content,
            companies_english_header:req.body.companies_english_header,
            companies_arabic_header:req.body.companies_arabic_header,
            contact_english_header:req.body.contact_english_header,
            contact_arabic_header:req.body.contact_arabic_header,
            contact_english_sub_header:req.body.contact_english_sub_header,
            contact_arabic_sub_header:req.body.contact_arabic_sub_header,
            english_address:req.body.english_address,
            arabic_address:req.body.arabic_address,
            email:req.body.email,
            phone:req.body.phone,
            arabic_submitting_message:req.body.arabic_submitting_message,
            english_submitting_message:req.body.english_submitting_message,
            facebook_url:req.body.facebook_url,
            youtube_url:req.body.youtube_url,
            twitter_url:req.body.twitter_url,
            instagram_url:req.body.instagram_url,
            whatsapp_number:req.body.whatsapp_number,
            footer_copyrights:req.body.footer_copyrights,
            
        } ,{new:true , runValidators:true , useFindAndModify:false})

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