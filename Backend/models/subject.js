const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    subjectName: { type: String, required: true ,  unique : true},
 // content: { type: String, required: true },
 // imagePath: { type: String, required: true },
 // category: {type:String, required: true},
 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Subjects", subjectSchema);
