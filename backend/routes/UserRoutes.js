import express from 'express'


const router = express.Router()
import {
    authUser,    
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    uploadimg,
    getImages
     } 
from '../controllers/UserController.js'
import { protect } from '../middleware/auth.js'



router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/upload',uploadimg)
router.get('/imgs',getImages)
router.post('/logout',logoutUser)
router.get('/profile',protect,getUserProfile)
router.put('/profile',protect,updateUserProfile)



export default router