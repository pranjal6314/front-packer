import User from "../../models/User";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    let u = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "sec1234").toString(),
    });

    await u.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ message: "We only support POST" });
  }
};

export default connectDb(handler);
