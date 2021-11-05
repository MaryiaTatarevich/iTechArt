const ApiError = require('../error/apiError')
const bcrypt = require('bcryptjs') //позвол. хэшировать пароли и сравнивать
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
//const ErrorHandlingMiddleware = require('../middleware/ErrorHandlingMiddleware')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    )
}

//Роли?? по умолчанию User
const registration = async (req, res, next) => {
    const {email, password, role} = req.body
    if (!email || !password) {
        return next(ApiError.badRequest('Wrong email or password'))
    }
    const candidate = await User.findOne({ where: { email } })

    if (candidate) {
        return next(ApiError.badRequest('This user already exists'))
    }
    const hashedPassword = await bcrypt.hash(password, 6)
    const user = await User.create({ email, password: hashedPassword, role })
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token })

}

const login = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
        return next(ApiError.internal('not found'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('not found'))
    }
    const token = generateJwt(user.id, user.email, user.role)

    return res.json({token})

}

const check = async (req, res, next) => {
    //через req.query можем получать параметры строки запроса 
    // const query = req.query 
    // res.json(query)
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
}

module.exports = {
    registration,
    login,
    check
}



