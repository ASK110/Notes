const express = require('express');
const router = express.Router();
const {upload} = require('../helpers/filehelpers')
const {registerUser,loginUser,userData,userNotes} = require('../helpers/postM')
const {loginpage,homepage,registerpage,gettingnotes} = require('../helpers/getM')

router.post('/user-register',registerUser);
router.post('/user-login',loginUser);
router.post('/user-data',userData);
router.post('/user-notes',userNotes)
// router.post('/user',profileUpload);
router.get('/',homepage);
router.get('/login',loginpage);
router.get('/register',registerpage);
router.get('/getnotes',gettingnotes)

module.exports = {router}