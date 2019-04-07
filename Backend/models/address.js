const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    houseno: { type: String, required: true },
    street: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },

 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Addresses", addressSchema);


