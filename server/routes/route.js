import express from 'express'
import { addEmployee, getAllemployee, login,updateEmplyee } from '../controler/controler.js'

const router = express.Router()

router.post('/',login)
router.post('/addemplyee',addEmployee)
router.get('/getallemployee',getAllemployee)
router.put('/update',updateEmplyee)

export default router