require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors') //отправлять запросы с браузера 
const router = require('./routes/index')
const models = require('./models/models')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

const PORT = process.env.PORT || 5000 

 const start =  async() => {
     try{
         await sequelize.authenticate() //устанавливаем подключение к БД
         await sequelize.sync() // Сверяет состояние БД со схемой данных 
         app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
         
     }catch(e){
         console.log('Server Error', e.message)
     }

 }

 start()
