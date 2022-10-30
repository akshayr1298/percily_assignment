import express from 'express'
import { addEmployee, login,updateEmplyee } from '../controler/controler.js'

const router = express.Router()

router.post('/',login)
router.post('/addemplyee',addEmployee)
router.put('/update',updateEmplyee)

export default router