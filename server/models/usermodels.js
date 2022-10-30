import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: Number, require: true },
  email: { type: String, require: true ,unique:true},
  department: { type: String, require: true },
});

export default mongoose.model("Users", userSchema);
