const mongoose = require("mongoose");

const jobrequestsSchema = mongoose.Schema({
    name: { type: String, required: true },
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
      contact: {
        type: Number,
        validate: {
          validator: function(v) {
            return /((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, ' phone number required']
      },
    message: { type: String, required: true },


    designationId : { type: mongoose.Schema.Types.ObjectId, ref: "Designations", required: true },
    subjectId : { type: mongoose.Schema.Types.ObjectId, ref: "Subjects", required: true },
    fileId: { type: mongoose.Schema.Types.ObjectId, ref: "Files", required: true },

});

module.exports = mongoose.model("jobrequests", jobrequestsSchema);



