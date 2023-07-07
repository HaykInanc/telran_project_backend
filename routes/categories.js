const categories  = require('../jsons/categories');
const products  = require('../jsons/products');

const express = require('express');

const router = express.Router();


router.get('/all', (req, res) =>{
    
    async function all(){
        const all = categories;
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
    const all = products.filter(({categoryId}) => categoryId === +id);
    const category = categories.filter((item) => item.id === +id);

    if(all.length === 0){
        res.json({status: 'ERR', message: 'empty category'});
        return
    }
    
    res.json({
        category,
        data: all
    });
})

module.exports = router;