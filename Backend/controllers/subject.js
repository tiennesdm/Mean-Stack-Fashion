const Subject = require("../models/subject");
//const id = 4;
exports.createSubject =  (req, res, next) => {
  console.log(req.body);
  console.log(req.body.subjectName);
  const subject = new Subject({
         subjectName:req.body.subjectName,
  });
  subject
    .save()
    .then(subject => {
      console.log(subject);
      res.status(201).json({
        message: "Created Subject  Fully",
        subject: {
          ...subject,
          id: subject._id
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
  Subject.find({})
    .then(subject => {
      if (subject) {
        res.status(200).json(subject);
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
  //console.log("userid=",req.userData.userId);
 // console.log(req.body);
//  let imagePath = req.body.imagePath;
/*  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }  */
   const subject = new Subject(
    {
      _id:req.body.id,
      subjectName:req.body.subjectName
    }
);
console.log(this.subject);
 // console.log(post.creator);
  Subject.updateOne({ _id: req.params.id }, subject)
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
  Subject.deleteOne({ _id: req.params.id })
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
  Subject.findById(req.params.id)
    .then(subject => {
      if (subject) {
        res.status(200).json(subject);
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