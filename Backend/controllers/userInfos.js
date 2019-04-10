const bcrypt = require('bcryptjs');
const UserInfo = require("../models/userInfos");
const Address = require("../models/address");
const {createAddress} = require("./address");

//const id = 4;
exports.createUser = async (req, res, next) => {
    console.log(req.body);
 //hash =  bcrypt.hash(req.body.password, 10);
 /*hash ;
 console.log("bcrypt");
 /*console.log(bcrypt.hash(req.body.password,10).then(hash =>{
   this.hash = hash;
   console.log(hash);
 })); */

    let {firstName, lastName, fatherName, email, password, age, sex, mobileNumber} = req.body;

  let addressData = ({
    houseno,
    street,
    location,
    city,
    state,
    country,
    pincode
  } = req.body);

  let newAddress = createAddress(addressData)

    let addressid = newAddress._id;

    // console.log(req.body.subjectName);
    const userInfo = new UserInfo({
        firstName,
        lastName,
        fatherName,
        email,
        password,
        Age: age,
        Sex: sex,
        mobileNumber,
        addressid
    });


// ***********************************
    try {

    
    let info = await Promise.all([userInfo.save(), newAddress.save()]);

    console.log(info);
    res.status(200).send(info)
    
  } catch(ex) {
    console.log(ex.message)
    res.status(400).send({err: ex})
  }
    // /************************************ */


    // userInfo
    //     .save()
    //     .then(userInfo => {
    //         console.log(userInfo);
    //         res.status(201).json({
    //             message: "Address Created",
    //             userInfo: {
    //                 ...userInfo,
    //                 id: userInfo._id
    //             }
    //         });
    //     })
    //     .catch(error => {
    //         res.status(500).json({
    //             message: "Creating Address Failed"
    //         });
    //     });
}
exports.getUser = (req, res, next) => {
    // address = req.headers.data;

    // console.log("Adress", req.headers.data);
  console.log('getting users')

    UserInfo.find({}).populate('addressid')
        .then(userInfo => {
            if (userInfo) {
                res.status(200).json({ info: userInfo });
            } else {
                res.status(404).json({ message: "Couldnot get the UserInfo" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Creating UserInfo Failed"
            });
        });
    // next();
}
exports.updateSubject = (req, res, next) => {

  console.log(req.body);
  const userInfo = new UserInfo({
      _id:req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    Age: req.body.age,
    Sex: req.body.Sex,
    mobileNumber: req.body.mobileNumber,
    addressid: req.body.addressid
});
console.log(userInfo);
 // console.log(post.creator);
 UserInfo.updateOne({ _id: req.params.id }, userInfo)
    .then(result => {
      if (result.nModified > 0) {
        res.status(200).json({ message: "Update SuccessFul" });
      } else {
        res.status(401).json({ message: "Already Exist" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate Subject!"
      });
    });
}
/* delete user by its address and  */
exports.deleteUser = (req, res, next) => {
  UserInfo.deleteOne({ _id: req.params.id }).populate('addressid')
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting Subject failed!"
      });
    });
}
/***get user by id informations */
exports.getUserById = (req, res, next) => {
  console.log(req.params);
  console.log(req.params.addressid);
  addressid = req.params.addressid;
  UserInfo.findById(req.params.id).populate('addressid')
    .then(address => {
      if (address) {
        res.status(200).json(address);
      } else {
        res.status(404).json({ message: "Subject not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Subject failed!"
      });
    });
  } 