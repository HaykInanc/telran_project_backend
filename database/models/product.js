const sequelize = require('../database');
const { DataTypes } = require("sequelize");
const { Sequelize } = require('sequelize');
const Category = require('./category');

const Product = sequelize.define("product", {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    discont_price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
});



module.exports = Product;