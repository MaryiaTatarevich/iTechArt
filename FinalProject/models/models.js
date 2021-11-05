const sequelize = require('../db')
const {DataTypes} = require('sequelize') // описывается тип поля

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    name:{type: DataTypes.STRING},
    surname:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue: "USER"}
})

const Cinema = sequelize.define('cinema', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    city:{type: DataTypes.STRING},
    address:{type: DataTypes.STRING},
    numberOfHalls:{type: DataTypes.INTEGER},
    isActive:{type: DataTypes.BOOLEAN, defaultValue: "true"}
})

 module.exports = {
     User,
     Cinema
 }
