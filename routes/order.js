const { request } = require('express');
const express = require('express');

const router = express.Router();


router.get('/send', (req, res) =>{
    res.json({});

})

router.post('/send', (req, res) => {
    
    res.json({status: 'OK', message: 'request processed'})
})


module.exports = router;