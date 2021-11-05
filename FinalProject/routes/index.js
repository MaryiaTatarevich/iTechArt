const Router = require('express')
const router = Router()
const userRouter = require('./userRouter')
const cinemaRouter = require('./cinemaRouter')


router.use('/user', userRouter)
router.use('/cinema', cinemaRouter)

// router.use('/movie', )
// router.use('/session', )

module.exports = router 