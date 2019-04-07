const Address = require("../models/address");
const UserInformation = require('../models/userInfos');

exports.createAddress = () => {
  // return new Promise((resolve, reject) => {
    // const address = new Address({
    //       houseno: req.body.houseno,
    //       street: req.body.street,
    //       location: req.body.location,
    //       city: req.body.city,
    //       state: req.body.state,
    //       country: req.body.country,
    //       pincode: req.body.pincode
    //     });

    //     return address.save();
  // });

  return new Address({
      houseno,
      street,
      location,
      city,
      state,
      country,
      pincode,
    });

}


// exports.createAddress = (req, res, next) => {
//   console.log(req.body);
//   const address = new Address({
//     houseno: req.body.houseno,
//     street: req.body.street,
//     location: req.body.location,
//     city: req.body.city,
//     state: req.body.state,
//     country: req.body.country,
//     pincode: req.body.pincode
//   });

//   console.log(address);

//   // address.save().then( req.headers.data = response);







//  /* address
//     .save()
//     .then(address => {
//       console.log(address);
//       res.status(201).json({
//         message: "Address Created",
//         address: {
//           ...address,
//           addressid: address._id
//         }
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Creating Address Failed"
//       });
//     }); */
// //  next();
// }
exports.getAddress = (req, res, next) => {
  Address.find({});
  //res.header('Content-Type', 'application/json');

  Address.find({}).then((response) => {
    req.headers.data = response;

    next();
  }).catch(error => {
    console.log("cannot get ");
  });
}
exports.updateAddress = (req, res, next) => {

  console.log(req.body);
  const address = new Address({
    _id: req.body.id,
    houseno: req.body.houseno,
    street: req.body.street,
    location: req.body.location,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    pincode: req.body.pincode
  });
  console.log(this.address);
  // console.log(post.creator);
  Address.updateOne({ _id: req.params.id }, address)
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

/**
 * delete 
 */
exports.deleteAddress = (req, res, next) => {
  Address.deleteOne({ _id: req.params.id })
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
exports.getAddressById = (req, res, next) => {
  Address.findById(req.params.id)
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