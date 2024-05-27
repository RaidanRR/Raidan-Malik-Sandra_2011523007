const express = require("express");
const router = express.Router();
const { getAllCoursePlan, getCourseMahasiswa, search,cetakRpsMahasiswa } = require("../controller/course_plan");


// Endpoint to serve static files
router.use(express.static("public"));



router.get("/home", (req, res) => {
  res.render("mahasiswa/home");
});

router.get("/progress-saya", (req, res) => {
  res.render("mahasiswa/progress-saya");
});

router.get("/notifikasi", (req, res) => {
  res.render("mahasiswa/notifikasi");
});

router.get("/profil", (req, res) => {
  res.render("mahasiswa/profil");
});

router.get("/profil-edit", (req, res) => {
  res.render("mahasiswa/profil-edit");
});


router.get("/cari", search);
router.get("/coursesPlan/:id/:rev", getCourseMahasiswa);
router.get("/coursesPlan", getAllCoursePlan);
router.get("/:id/:rev/cetakRps", cetakRpsMahasiswa);

module.exports = router;
