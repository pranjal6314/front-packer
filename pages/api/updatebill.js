import User from "../../models/User";
import Bill from "../../models/Bill";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
import jsonewebtoken from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // let token = req.body.token;
    // const user = jsonewebtoken.verify(token, "ourkey");
    let dbuser = await Bill.findOneAndUpdate(
      { bill_id: req.body.id },
      {
        consignorName: req.body.consignorName,
        consignorAddress: req.body.consignorAddress,
        date: req.body.date,
        from: req.body.from,
        to: req.body.to,
        deliveryaddress: req.body.deliveryaddress,
        distance: req.body.distance,
        lorryno: req.body.lorryno,
        freightRate: req.body.freightRate,
        cgst: req.body.cgst,
        igst: req.body.igst,
        sgst: req.body.sgst,
        loading_charges: req.body.loading_charges,
        unloading_charges: req.body.unloading_charges,
        packing_charges: req.body.packing_charges,
        stationary_charges: req.body.stationary_charges,
        actual_weight: req.body.actual_weight,
        charged_weight: req.body.charged_weight,
        total: req.body.total,
      }
    );
    // const { name } = dbuser;
    res.status(200).json({
      success: true,
      dbuser: dbuser,
    });
  } else {
    res.status(400).json({ success: false, error: "no user found" });
  }
};

export default connectDb(handler);
