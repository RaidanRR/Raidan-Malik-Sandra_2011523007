const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const users = require("../models/users");
dotenv.config();

function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;
  if (token == null) return res.status(401).send('Akses ditolak');

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    if (err) return res.status(403).send('Token tidak valid');
    next();
  });
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await users.findByPk(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const ensureAuthenticated = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        return res.redirect('/login');
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    return res.redirect('/login');
  }
};

module.exports = { authenticateToken, checkUser, ensureAuthenticated };
