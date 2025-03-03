const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid EMail'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be of atleast 3 character'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be of atleast 3 character'),
    body('password').isLength({min:5}).withMessage('Password must be of atleast 5 character'),

],
userController.registerUser);
router.post('/login',[
    body('email').isEmail().withMessage('Invalid EMail'),
    body('password').isLength({min:5}).withMessage('Password must be of atleast 5 character'),

],
userController.loginUser);

router.get('/profile',authMiddleware.authUser, userController.getUserProfile); 
router.get('/logout',authMiddleware.authUser, userController.logoutUser);


module.exports = router;