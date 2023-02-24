const { request } = require('express');
const express = require('express');
const categories = require('./routes/categories');
const sale = require('./routes/sale');
const order = require('./routes/order');
const products = require('./routes/products');
const sequelize = require('./database/database');
const cors = require('cors')
const Category = require('./database/models/category');
const Product = require('./database/models/product');
const PORT = 3333;

Category.hasMany(Product);

const app = express();
app.use(express.static('public'))
app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded());
app.use('/categories', categories);
app.use('/products', products);
app.use('/sale', sale);
app.use('/order', order);




app.use(express.json());

const start = async () =>{
    try{
        await sequelize.sync().then(
            result => {/*console.log(result) */},
            err => console.log(err)
        );
        
        app.listen(PORT, ()=>{
            console.log(`\n\nServer started on ${PORT} port...`)
        })
    }catch(err){
        console.log(err);
    }
}
start();

// app.listen('3333');