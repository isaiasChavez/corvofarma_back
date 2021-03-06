import express from 'express'
import { check } from "express-validator"
import authMid from '../../middleware/auth'
const router = express.Router()
import AuthController from './auth.controller'

const authController = new AuthController()

router.post("/",
[check("email", "El email es obligatorio").not().isEmpty(),
check("password", "El password es obligatorio").not().isEmpty()
],

 authController.authenticateUser )


router.get("/",authMid,authController.authenticatedUser)

export default router