const express = require('express');
const { signup_get, signup_post, login_get, login_post, logout_get, settings_get, change_password_post } = require('../controller/users');
const { authenticateToken, ensureAuthenticated } = require('../middleware/verifyToken');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(express.static('public'));
router.use(express.json());
router.use(cookieParser());


router.get('/settings', ensureAuthenticated, settings_get);
router.post('/settings', ensureAuthenticated, change_password_post);


router.get('/register', signup_get);
router.post('/register', signup_post);
router.get('/signup', signup_get);
router.post('/signup', signup_post);
router.get('/login', login_get);
router.post('/login', login_post);
router.get('/logout', logout_get);

module.exports = router;
