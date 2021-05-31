

const express = require('express')
const router  = express.Router();
const multer  = require('multer');
const Task  = require('../models/task'); 
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


// Post
router.post('/add-project',  upload.single('img') ,async(req,res)=>{
    try{
        const buffer = await sharp(req.file.buffer).toBuffer()
        const _id = req.body.productID;
        console.log("===========>", _id)

        const pro = await Product.findOne({_id})
        const data = new Task({
            img:buffer,
            title:req.body.title,
            product:pro,
            consultant:req.body.consultant,
            owner:req.body.owner,
            location:req.body.location
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


router.get('/project/image/:id/view' , async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Task.find({_id:id});
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



////////////////////////////////////////////////////////////////////////////
router.get('/projects',async(req,res)=>{
    try{
        const tasks = await Task.find({img: 0})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})


// Get by id
router.get('/projects/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        // const task = await Task.findById(_id)
        const task = await Task.findOne({_id}, {img: 0})
        if(!task){
            return res.status(400).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})


// Delete by id 

router.delete('/projects/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findOneAndDelete({_id})
        if(!task){
            return  res.status(404).send()
        }
        res.send(task)

    }catch(e){
        res.status(500).send
    }
})



router.put('/projects/:id',  upload.single('avatar'), async (req,res)=>{
    try{
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(
            id, 
            {
                project_img:req.file.buffer,
                title:req.body.title,
                productID:req.body.productID,
                consultant:req.body.consultant,
                owner:req.body.owner,
                location:req.body.location
            },
            {new:true , runValidators:true , useFindAndModify:false}
        )
        if(!task){
            return res.status(400).send({
                status:'Error',
                Error: 'Something wrong'
            })
        }
        res.status(200).send({
            status: 'success',
            data: task._id
        })

    }catch(e){
        res.status(400).send({
            status:'Error',
            Error: e
        });
    }

})

// })
module.exports = router



