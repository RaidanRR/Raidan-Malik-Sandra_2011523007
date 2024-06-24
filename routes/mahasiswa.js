const express = require("express");
const router = express.Router();
const { getAllCoursePlan, getCourseMahasiswa, search, cetakRpsMahasiswa } = require("../controller/course_plan");
const usersController = require("../controller/users");
const multer = require("multer");
const { profile_edit_post } = require('../controller/users');
const { ensureAuthenticated } = require('../middleware/verifyToken');
const { settings_get, change_password_post } = require('../controller/users');
router.get('./settings', ensureAuthenticated, settings_get);
router.post('./settings', ensureAuthenticated, change_password_post);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.use(express.static("public"));

router.get("/profil", (req, res) => {
  res.render("mahasiswa/profil");
});

router.get("/home", (req, res) => {
  res.render("mahasiswa/home");
});

router.get("/progress-saya", (req, res) => {
  res.render("mahasiswa/progress-saya");
});

router.get("/penjadwalan", (req, res) => {
  res.render("mahasiswa/penjadwalan");
});

router.get("/notifikasi", (req, res) => {
  res.render("mahasiswa/notifikasi");
});

router.get("/profil/:id", usersController.profile_get);
router.get("/profil-edit/:id", usersController.profile_edit_get);
router.post("/profil-edit/:id", upload.single('foto'), usersController.profile_edit_post);
router.post('/profile/:id/edit', profile_edit_post);


router.get("/cari", search);
router.get("/coursesPlan/:id/:rev", getCourseMahasiswa);
router.get("/coursesPlan", getAllCoursePlan);
router.get("/:id/:rev/cetakRps", cetakRpsMahasiswa);

module.exports = router;
