const { UserModel } = require("../model/user.model");
const AddUser = async (req, res) => {
  const { name, difficulty_level } = req.body;

  const new_User = new UserModel({
    name: name,
    difficulty_level: difficulty_level,
  });
  await new_User.save();
  res.send({ msg: "Data Added",data:new_User });
};
const GenrateRandomWord = async (req, res) => {
  let {length}=req.query;
  let num =length;
  let result ="";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  res.send(result);
};
const UserController = {
  AddUser,
  GenrateRandomWord,
};
module.exports = {
  UserController,
};
