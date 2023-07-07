
const express = require('express');
const products  = require('../jsons/products');

const router = express.Router();



router.get('/all', (req, res) =>{
    
    async function all(){
        console.log(products);
        const all = products;
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
    const all = products.filter(item => item.id === +id);

    if(all.length === 0){
        res.json({status: 'ERR', message: 'product not found'});
        return
    }
    
    res.json(all);
})



module.exports = router;