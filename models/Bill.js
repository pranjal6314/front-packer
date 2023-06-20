// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
const BillSchema = new mongoose.Schema(
  {
    email: { type: String },
    bill_id: { type: String },
    consignorName: { type: String },
    consignorAddress: { type: String },
    consigneeGst: { type: String },
    date: { type: String },
    from: { type: String },
    to: { type: String },
    distance: { type: String },
    lorryno: { type: String },
    phoneno: { type: String },
    freightRate: { type: String },
    deliveryaddress: { type: String },
    pan: { type: String },
    gstin: { type: String },
    cgst: { type: String },
    sgst: { type: String },
    igst: { type: String },
    loading_charges: { type: String },
    unloading_charges: { type: String },
    packing_charges: { type: String },
    stationary_charges: { type: String },
    actual_weight: { type: String },
    charged_weight: { type: String },

    total: { type: String },
    goods: [
      {
        Package_name: { type: String },
        No_of_packages: { type: String },
        Description: { type: String },
        // Weight: { type: String },
        // rate: { type: String },
      },
    ],
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Bill", BillSchema);
// export default mongoose.model.User || mongoose.model("User", UserSchema);
