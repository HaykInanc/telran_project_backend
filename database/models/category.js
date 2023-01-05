const sequelize = require('../database');
const { DataTypes } = require("sequelize");
const { Sequelize } = require('sequelize');
const Product = require('./product');

const Category = sequelize.define("category", {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.TEXT,
    image: DataTypes.TEXT,
});



module.exports = Category;