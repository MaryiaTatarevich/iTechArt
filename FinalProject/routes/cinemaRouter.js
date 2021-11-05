//дополнительный компонент сопоставляет запросы с маршрутами 
//и выбирает для обработки запросов определенный контроллер.

const Router = require('express')
const router = Router()
const cinemaController = require('../controllers/cinemaController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), cinemaController.createCinema)
router.get('/', cinemaController.getCinemas)
router.get('/:id', cinemaController.getOneCinema)
// router.put('/', cinemaController.updateCinema)
// router.delete('/:id', cinemaController.deleteCinema)

module.exports = router 
