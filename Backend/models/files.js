const mongoose = require("mongoose");

const filesSchema = mongoose.Schema({
    contentType: { type: String, required: true },
    fileName: { type: String, required: true },
    extension: { type: String, required: true },
    content: { type: String, required: true },

 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Files", filesSchema);


