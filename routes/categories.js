const Category = require('../database/models/category');
const Product = require('../database/models/product');

const { request } = require('express');
const express = require('express');

const router = express.Router();


router.get('/all', (req, res) =>{
    
    async function all(){
        const all = await Category.findAll();
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
    const all = await Product.findAll({where: {categoryId: +id}});

    if(all.length === 0){
        res.json({status: 'ERR', message: 'empty category'});
        return
    }
    
    res.json(all);
})

module.exports = router;