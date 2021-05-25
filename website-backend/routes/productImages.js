const express = require('express')
const router  = express.Router();
const multer  = require('multer');
const productImages  = require('../models/productImage'); 
const Product = require('../models/product.js');

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

router.post('/add-productImage',  upload.single('img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const _id = req.body.productId;
        const product = await Product.findOne({_id})
        const data = new productImages({
            img:buffer,
            product: product
        })

        await data.save();
        res.status(200).send({
            status:'success',
            data: data._id
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-productImages',  async(req,res)=>{
    
    try{
        const data = await productImages.find({});
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

router.get('/product/:product_id/image/:id/view' , async(req,res)=>{
    try{
        const product_id = req.params.product_id;
        const id = req.params.id;
        const data = await productImages.find({product: product_id , _id:id});
        res.set('Content-type' , 'image/jpg');
        res.send(data[0].img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-productImages/:id' ,async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await productImages.find({product: id});
        res.status(200).send({
            status:'success',
            data:data.map(product=> product._id)
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-productImages/:id' ,async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await productImages.find({product: id});
        res.status(200).send({
            status:'success',
            data:data.map(product=> product._id)
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})

router.get('/get-productImages-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await productImages.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.get('/website-get-productImages-image/:id/view' , async(req,res)=>{
    
    try{
        const id = req.params.id
        const data = await productImages.findById(id);
        res.set('Content-type' , 'image/jpg');
        res.send(data.img);
    }catch(e){
        res.status(400).send({
            status:'Error',
            status:'Error',
            Error: e
        });
    }
})

router.put('/update-productImages/:id',  upload.single('img'), async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(req.body)
        const data = await productImages.findByIdAndUpdate(
            id, 
            {
                img:req.file.buffer,
                product: req.body.product
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
            data: data._id
        })

    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }

})

router.delete('/delete-productImages/:id', async(req,res)=>{
    
    try{
        const id = req.params.id
        console.log('id==>' , id)
        const data = await productImages.findByIdAndDelete(id);
        if(!data){
            res.status(400).send({
                status:'Error',
                Error: 'can\'t find that productImages'
            });
        }
        res.status(200).send({
            status:'success',
            data:data._id
        });
    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }
})
module.exports = router;