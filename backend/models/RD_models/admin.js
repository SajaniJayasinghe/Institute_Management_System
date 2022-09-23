const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const adminSchema = new mongoose.Schema({

    adminName: {
        type : String,
        required : true,
        
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
adminSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
});
 
// @Action - Get auth token
adminSchema.methods.generateAuthToken = async function () {
    const admin = this;
    const token = jwt.sign({ _id: admin._id }, "jwtSecret");
    admin.tokens = admin.tokens.concat({ token });
    await admin.save();
    return token;
  };
 
  // @Action - Find admin by credentials
  adminSchema.statics.findByCredentials = async (email, pwd) => {
    const admin1 = await admin.findOne({ email });
    if (!admin1) {
      throw new Error("Please enter authorized admin Email");
    }
    const isMatch = await bcrypt.compare(pwd,admin1.pwd);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return admin1;
  };

const admin = mongoose.model("admin",adminSchema);
module.exports = admin;