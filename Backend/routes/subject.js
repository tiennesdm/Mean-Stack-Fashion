const express = require("express");
// const fileverify = require("../middleware/imagevalidation");
const subjectcontroller = require("../controllers/subject");
//const checkAuth = require("../middleware/check-auth");


 // const checkAuth = require("../middleware/check-auth");

const router = express.Router();


router.post("", subjectcontroller.createSubject );
router.get("", subjectcontroller.getSubject);
router.put(
  "/:id", subjectcontroller.updateSubject
);
router.delete("/:id",subjectcontroller.deleteSubject);
router.get("/:id", subjectcontroller.getSubjectById );



module.exports = router;
