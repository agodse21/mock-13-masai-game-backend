const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  difficulty_level: { type: String, require: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel,
};
