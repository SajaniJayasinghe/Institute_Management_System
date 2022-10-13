const mongoose = require ('mongoose');
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema({

    studentName :{
        type : String,
        required : true
    
      },
  
      email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Please enter valid Email address");
          }
        },
    },

    pwd: {

      type: String,
      required: true,
      trim: true,
  },

  
  NIC: {
    type: String,
    required: true,
  },

      phone: {
        type: String,
        required: true,
      },
      
      tokens: [
        {
        token: {
            type: String,
            required: true,
        },
        },
    ],   
},  {timestamps:true});

// @Action - encrypt the password
studentSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
  });

  // @Action - Get auth token
  studentSchema.methods.generateAuthToken = async function () {
    const student = this;
    const token = jwt.sign({ _id: student._id }, "jwtSecret");
    student.tokens = student.tokens.concat({ token });
    await student.save();
    return token;
};

// @Action - Find customer by credentials
studentSchema.statics.findByCredentials = async (email, pwd) => {
    const student1 = await student.findOne({ email });
    if (!student1) {
      throw new Error("Please enter authorized student Email");
    }
    const isMatch = await bcrypt.compare(pwd, student1.pwd);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return student1;
    };

 const student = mongoose.model("student", studentSchema);
 module.exports = student; 