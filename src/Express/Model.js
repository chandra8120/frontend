
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: false },
//     username: { type: String, required: false },
//     email: { type: String, required: false },
//   });
  
// module.exports=mongoose.model('userSchema',userSchema)



const mongoose = require('mongoose');

const data = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('data', data);
