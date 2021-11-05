const {Cinema} = require('../models/models')
const ApiError = require('../error/apiError')

const createCinema = async (req, res) => {
    const {name, city, address, numberOfHalls, isActive} = req.body
    const newCinema = await Cinema.create({name, city, address, numberOfHalls, isActive})
    return res.json(newCinema)
}

const getCinemas = async (req, res) => {
    const cinemas = await Cinema.findAll()
    res.json(cinemas)
}

const getOneCinema = async (req, res) => {
    const {id} = req.params
    const cinema = await Cinema.findOne(
        {where: {id}}
    ) 
    res.json(cinema)
}

module.exports = { 
    createCinema,
    getCinemas,
    getOneCinema
    // updateCinema,
    // deleteCinema
}

//без sequelize
// const createCinema = async (req, res) => {
//     const {name, city, address, numberOfHalls, isActive} = req.body
//     const newCinema = await db.query('INSERT INTO cinema (name, city, address, number_of_halls, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//     [name, city, address, numberOfHalls, isActive])
//     res.json(newCinema.rows[0])
// }

// const getCinemas = async (req, res) => {
//     const cinemas = await db.query('SELECT * FROM cinema')
//     res.json(cinemas.rows)
// }

// const getOneCinema = async (req, res) => {
//     const id = req.params.id
//     const cinema = await db.query('SELECT * FROM cinema where id = $1', [id])
//     res.json(cinema.rows[0])
// }

// const updateCinema = async (req, res) => {
//     const {id, name, city, address, numberOfHalls, isActive} = req.body
//     const updateCinema = await db.query('UPDATE cinema set name = $1, city = $2, address = $3, number_of_halls = $4, is_active = $5 where id = $6 RETURNING *',
//     [name, city, address, numberOfHalls, isActive, id])
//     res.json(updateCinema.rows[0])
// }

// const deleteCinema = async (req, res) => {
//     const id = req.params.id
//     const deleteCinema = await db.query('DELETE FROM cinema where id = $1', [id])
//     res.json(deleteCinema.rows[0])  
// }