const express = require("express");
//const fileverify = require("../middleware/imagevalidation");
const addresscontroller = require("../controllers/address");
const userInfocontroller= require("../controllers/userInfos");
const subjectcontroller = require("../controllers/subject");

//const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/use",  userInfocontroller.getUser);
router.get("/", addresscontroller.getAddress, userInfocontroller.getUser);
router.get("/user", userInfocontroller.getUser);

router.delete("/:id", addresscontroller.deleteAddress );

router.put("/:id",  addresscontroller.updateAddress );
//router.get("/:category", postcontroller.getpostbyCategory );
// router.post("/", addresscontroller.createAddress, userInfocontroller.createUser);
router.post('/newuser', userInfocontroller.createUser)


module.exports = router;
