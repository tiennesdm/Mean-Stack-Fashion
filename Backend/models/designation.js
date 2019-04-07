const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    position: { type: String, required: true },
});

module.exports = mongoose.model("Designations", subjectSchema);
