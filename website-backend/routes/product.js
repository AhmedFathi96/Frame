const express = require('express')
const Product = require('../models/product.js');
const router  = new express.Router()
const multer  = require('multer')
const auth    = require('../middleware/auth')




// Post
router.post('/create-product',async(req,res)=>{

    const task = new Product(req.body)
    try{
        await task.save()
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

////////////////////////////////////////////////////////////////////////////
router.get('/products',async(req,res)=>{
    try{
        const products = await Product.find({});
    
        res.send(products)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/products/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        // const task = await Task.findById(_id)
        const task = await Product.findOne({_id})
        if(!task){
            return res.status(400).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

// Edit by id
router.patch('/products/:id', auth,async(req,res)=>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try{
        // const task = await Task.findById(req.params.id)
        const task = await Product.findOne({_id})
        if(!task){
            return res.status(404).send()
        }
        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()
        res.send(task)
    }
    catch(e){
        res.status(400).send()
    }
})

// Delete by id 

router.delete('/products/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const product = await Product.findOneAndDelete({_id})
        if(!product){
            return  res.status(404).send()
        }
        res.send(product._id)

    }catch(e){
        res.status(500).send
    }
})
//////////

module.exports = router
