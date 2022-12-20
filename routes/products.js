const { request } = require('express');
const express = require('express');
const Product = require('../database/models/product');

const router = express.Router();



router.get('/all', (req, res) =>{
    
    async function all(){
        const all = await Product.findAll();
        console.log(all);
        res.json(all);
    }
    all();
})


router.get('/:id', async (req, res) =>{
    const {id} = req.params;

    if (isNaN(id)){
        res.json({status: 'ERR', message: 'wrong id'}); 
        return  
    }
    const all = await Product.findAll({where: {id: +id}});

    if(all.length === 0){
        res.json({status: 'ERR', message: 'product not found'});
        return
    }
    
    res.json(all);
})


router.get('/add/:title/:price/:discont_price/:description', (req, res) =>{
    const {title, price, discont_price, description} = req.params;
    Product.create({title, price, discont_price, description, categoryId: 1});
    res.json(`добавлено`);
})

module.exports = router;