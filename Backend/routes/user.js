const express = require("express");
//const fileverify = require("../middleware/imagevalidation");
const addresscontroller = require("../controllers/address");
const userInfocontroller= require("../controllers/userInfos");
const subjectcontroller = require("../controllers/subject");

//const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/use",  userInfocontroller.getUser);
router.get("/", userInfocontroller.getUser);
router.get("/user/:id", userInfocontroller.getUser);

router.delete("/:id", userInfocontroller.deleteUser );

//router.put("/:id/:addressid",  addresscontroller.updateAddress );
router.get("/:id", userInfocontroller.getUserById );
// router.post("/", addresscontroller.createAddress, userInfocontroller.createUser);
router.post('/newuser', userInfocontroller.createUser)


module.exports = router;
