import Employe from "../models/usermodels.js";
import bcrypt from "bcrypt";
import Admin from "../models/adminmodels.js";

const login = async (req, res, next) => {
 
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(401).json({ message: "Invalid Email" });
    }
    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) {
      res.status(401).json({ message: "Invalid Password" });
    }
    res.status(200).json({ message: "login successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addEmployee = async (req, res, next) => {
  try {
    const { name, phone, email, department } = req.body;

    const emailExist = await Employe.findOne({ email });
    if (emailExist) {
      res
        .status(403)
        .json({ message: "email already exist try another email" });
    }
    await Employe.create({ name, phone, email, department });
    res.status(200).json({ message: "user added successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateEmplyee = async (req, res, next) => {
  try {
    const { name, phone, email, department, id } = req.body;
    console.log(req.body);
    console.log("id", id);
    const update = await Employe.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          phone: phone,
          email: email,
          department: department,
        },
      }
    );
    if (update) {
      res
        .status(200)
        .json({ message: "employee details update successfully", update });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export { addEmployee, login, updateEmplyee };
