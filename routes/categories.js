const Category = require('../database/models/category');

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

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.send(`${id}-я категория`);
})

module.exports = router;