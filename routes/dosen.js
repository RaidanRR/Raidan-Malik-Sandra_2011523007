const express = require("express");
const { getAllCourses, createCourse, getMatkul } = require("../controller/courses");
const { getCurriculumLos, hapusCP, tambahCP } = require("../controller/course_lo_details");
const { getCourses, editCoursePlan, updateCoursePlan, revisi, revisiRps, cetakRps } = require("../controller/course_plan");
const { getCourseLos, createCourseLos, updateCourseLos, deleteCourseLos, getCourseLosById } = require("../controller/course_los");
const { getDetail, getDetailById, createDetail, updateDetail, deleteDetail } = require("../controller/course_plan_details");
const { getReferences, createReference, getReferenceById, updateReference, deleteReference } = require("../controller/course_plan_references");
const { getAssessments, getAssessmentsById, createAssessments, updateAssessments, deleteAssessments } = require("../controller/course_plan_assessments");
const usersController = require("../controller/users");
const { profile_edit_post } = require('../controller/users');
const multer = require("multer");

const router = express.Router();

router.use(express.static("public"));

router.use("/", (req, res, next) => {
  const role = req.cookies.type;
  if (role != "D") return res.render("err403");
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

router.get("/:id/courses", getAllCourses);
router.get("/coursesPlan/:id/:rev", getCourses);
router.put("/coursesPlan/:id/:rev/edit", updateCoursePlan);
router.get("/coursesPlan/:id/:rev/edit", editCoursePlan);
router.post("/coursesPlan/:id/:rev/revisi", revisi);
router.get("/coursesPlan/:id/:rev/revisi", revisiRps);
router.get("/add-course", getMatkul);
router.post("/add-course", createCourse);
router.get("/:id/:rev/cetakRps", cetakRps);


router.get("/:id/:rev/CPMK", getCourseLos);
router.get("/:id/:rev/add-cpmk", (req, res) => {
  res.render("dosen/add_cpmk");
});
router.post("/:id/:rev/add-cpmk", createCourseLos);
router.get("/:id/:rev/edit-cpmk/:id", getCourseLosById);
router.put("/:id/:rev/edit-cpmk/:id", updateCourseLos);
router.delete("/:id/:rev/CPMK/:id", deleteCourseLos);


router.get("/:id/:rev/cpl/:cl", getCurriculumLos);
router.delete("/cpl/:id", hapusCP);
router.post("/cpl/tambah", tambahCP);


router.get("/:id/:rev/pertemuan", getDetail);
router.get("/:id/:rev/add-pertemuan", (req, res) => {
  res.render("dosen/add_pertemuan");
});
router.post("/:id/:rev/add-pertemuan", createDetail);
router.delete("/:id/:rev/pertemuan/:id", deleteDetail);
router.get("/:id/:rev/edit-pertemuan/:id", getDetailById);
router.put("/:id/:rev/edit-pertemuan/:id", updateDetail);


router.get("/:id/:rev/referensi", getReferences);
router.get("/:id/:rev/add-referensi", (req, res) => {
  res.render("dosen/add_referensi");
});
router.post("/:id/:rev/add-referensi", createReference);
router.delete("/:id/:rev/referensi/:id", deleteReference);
router.get("/:id/:rev/edit-referensi/:id", getReferenceById);
router.put("/:id/:rev/edit-referensi/:id", updateReference);


router.get("/:id/:rev/penilaian", getAssessments);
router.get("/:id/:rev/add-penilaian", (req, res) => {
  res.render("dosen/add_penilaian");
});
router.post("/:id/:rev/add-penilaian", createAssessments);
router.delete("/:id/:rev/penilaian/:id", deleteAssessments);
router.get("/:id/:rev/edit-penilaian/:id", getAssessmentsById);
router.put("/:id/:rev/edit-penilaian/:id", updateAssessments);

router.get("/profil", (req, res) => {
  res.render("dosen/profil");
});
router.get("/profil/:id", usersController.profile_get);
router.get("/profil-edit/:id", usersController.profile_edit_get);
router.post("/profil-edit/:id", upload.single('foto'), usersController.profile_edit_post);
router.post('/profile/:id/edit', profile_edit_post);

const ReferensiTa1Controller = require('../controller/ReferensiTa1');
router.get("/ReferensiTa1", (req, res) => {
  res.render("dosen/ReferensiTa1");
});
router.get("/referensi-ta", ReferensiTa1Controller.getReferensiTa1);


router.get("/progress-saya", (req, res) => {
  res.render("mahasiswa/progress-saya");
});


router.get("/notifikasi", (req, res) => {
  res.render("dosen/notifikasi");
});

module.exports = router;
