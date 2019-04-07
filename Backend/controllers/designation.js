const Designation = require("../models/designation");
//const id = 4;
exports.createSubject =  (req, res, next) => {
  console.log(req.body);
  console.log(req.body.position);
  const designation = new Designation({
         position:req.body.position,
  });
  designation
    .save()
    .then(designation => {
      console.log(designation);
      res.status(201).json({
        message: "Created Designation  Fully",
        designation: {
          ...designation,
          id: designation._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating Subject Failed"
      });
    });
}
exports.getSubject = (req, res, next) => {
  Designation.find({})
    .then(designation => {
      if (designation) {
        res.status(200).json(designation);
      } else {
        res.status(404).json({ message: "Couldnot get the Subject" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating Subject Failed"
      });
    });
}
exports.updateSubject = (req, res, next) => {

  console.log(req.body);
   const designation = new Designation(
    {
      _id:req.body.id,
      position:req.body.position
    }
);
console.log(this.subject);
 // console.log(post.creator);
  Designation.updateOne({ _id: req.params.id }, designation)
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
exports.deleteSubject = (req, res, next) => {
  Designation.deleteOne({ _id: req.params.id })
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
exports.getSubjectById = (req, res, next) => {
  Designation.findById(req.params.id)
    .then(designation => {
      if (designation) {
        res.status(200).json(designation);
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