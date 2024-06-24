const express = require("express");
const { coursesAdmin, cetakListRps, getCourseAdmin } = require("../controller/course_plan");
const { getDosen, tambahDosen, hapusDosen } = require("../controller/course_plan_lecturers");
const { cetak, getPeta } = require("../controller/course_lo_details");
const usersController = require("../controller/users");
const multer = require("multer");
const { profile_edit_post } = require('../controller/users');


const router = express.Router();
router.use(express.static("public"));


router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "T") return res.render("err403");
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.get("/coursesPlan", coursesAdmin);
router.get("/coursesPlan/:id/:rev", getDosen);
router.post("/tambahDosen", tambahDosen);
router.delete("/hapusdosen/:id", hapusDosen);
router.get("/coursesPlan/:id/:rev/cetakRps", getCourseAdmin);
router.get("/persentaseRps", (req, res) => {
  res.render("admin/persentaseRps");
});

router.get("/petaCplCpmk/:id/:rev", getPeta);

router.get("/cetakCplCpmk/:id/:rev", cetak);

router.get("/cetakListRps", cetakListRps);


router.get("/profil", (req, res) => {
  res.render("admin/profil");
});
router.get("/profil/:id", usersController.profile_get);
router.get("/profil-edit/:id", usersController.profile_edit_get);
router.post("/profil-edit/:id", upload.single('foto'), usersController.profile_edit_post);
router.post('/profile/:id/edit', profile_edit_post);

module.exports = router;
