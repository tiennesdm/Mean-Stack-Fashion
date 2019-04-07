const mongoose = require("mongoose");

const userInfoSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email:  {
        type: String,
        validate: {
          validator: function(v) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
          },
          message: props => `${props.value} is not a valid email !`
        },
        required: [true, ' email is required']
      },
    password: { type: String, required: true },
    Age: { type: Number, min:5, max: 21 },
    Sex: { type: String, required: true },
    mobileNumber: {
    type: Number,
    // validate: {
    //   validator: function(v) {
    //     return /((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // },
    required: [true, ' phone number required']
  },
  fatherName:{ type: String, required: true },

  addressid: { type: mongoose.Schema.Types.ObjectId, ref: "Addresses", required: true }
});

module.exports = mongoose.model("Userinformations", userInfoSchema);