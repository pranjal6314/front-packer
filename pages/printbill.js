import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { FaPrint } from "react-icons/fa";
const PrintBill = () => {
  let componentRef = useRef();
  const router = useRouter();
  const { formData } = router.query;
  // console.log(formData);
  const [data, setData] = useState(null);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [gstin, setGstin] = useState("");
  const [phone, setphone] = useState("");
  const [imgurl, setImageurl] = useState("");
  useEffect(() => {
    if (formData) {
      setData(JSON.parse(formData));
    }
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token) {
      setUser({ value: token, email: email });
      fetchuser(token);
      setKey(Math.random());
    } else {
      router.push("/");
    }
  }, [router.query, formData]);
  //console.log(data);
  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
  };
  const fetchuser = async (token) => {
    let data = { token: token };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responce = await res.json();
    //console.log(responce);
    setName(responce.name);
    setAddress(responce.address);
    setGstin(responce.gstin);
    setPan(responce.pan);
    setphone(responce.phone);
    setImageurl(responce.image);
  };

  const watermarkFormStyle = {
    backgroundImage: `url(${imgurl})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "500px 300px",
  };
  return (
    <>
      <Navbar user={user} logout={logout} key={key} />

      <div className="">
        <div
          className="p-8 relative watermark-form"
          style={watermarkFormStyle}
          ref={(el) => (componentRef = el)}
        >
          <div className="container mx-auto p-4">
            {/* First Row */}
            <div className="flex border flex-row h-32 ">
              <div className="flex items-center justify-center  w-1/3">
                <img src={imgurl} alt="Home" className="h-28 w-32" />
              </div>
              <div className="">
                <div className="flex h-full items-center p-2 ">
                  <div className="">
                    <p className="font-bold text-3xl"> {name}</p>
                    <p className="font-bold text-2xl"> Packers &amp; Movers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex border justify-between">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">Address : {address}</p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">Email : {data?.email}</p>
                <p className="font-bold">Phone Number :{phone} </p>
              </div>
            </div>

            {/* Third Row */}
            <div className="flex border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">PAN Number : {pan}</p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">GSTIN Number : {gstin}</p>
              </div>
            </div>
            {/* Third Row */}
            <div className="flex border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">
                  {" "}
                  Consignor Name : {data?.consignorName}
                </p>
                <p className="font-bold">
                  {" "}
                  Consignor Address : {data?.consignorAddress}
                </p>
                <p className="font-bold">
                  {" "}
                  Consignee Gst : {data?.consigneeGst}
                </p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">Notice : {}</p>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="flex border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">Lorry Number : {data?.lorryno}</p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">Date : {data?.date}</p>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="flex border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">From : {data?.from}</p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">To : {data?.to}</p>
              </div>
            </div>

            {/* Sixth Row */}
            <div className="flex border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">
                  Delivery Address : {data && data?.deliveryaddress}
                </p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">Distance : {data && data?.distance}</p>
              </div>
            </div>

            {/* Seventh Row */}

            <div className=" border ">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Package Name</th>
                    <th>No. of Packages</th>
                    <th>Description</th>
                    {/* <th>Weight</th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Goods section */}
                  {data &&
                    data?.goods.map((item, index) => (
                      <tr key={index} className="text-center w-full">
                        <td>{item.Package_name}</td>
                        <td>{item.No_of_packages}</td>
                        <td>{item.Description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* Eighth Row */}
            <div className="flex border">
              <div className="w-1/4 flex flex-col border-r">
                <div className="flex-grow p-2">
                  <p className="font-bold">Fright</p>
                  <p className="font-bold">SGST</p>
                  <p className="font-bold">CGST</p>
                  <p className="font-bold">IGST</p>
                  <p className="font-bold">Loading Charges</p>
                  <p className="font-bold">Unloading Charges</p>
                  <p className="font-bold">Packing Charges</p>
                  <p className="font-bold">Unpacking Charges</p>
                  <p className="font-bold">Actual Weight</p>
                  <p className="font-bold">Charged Weight</p>
                  <p className="font-bold">Total : </p>
                </div>
              </div>
              <div className="w-1/4 flex flex-col border-r">
                <div className="flex-grow p-2">
                  <p className="font-bold">
                    {data && data.freightRate ? data.freightRate : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.sgst ? data.sgst : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.cgst ? data.cgst : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.igst ? data.igst : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.loading_charges
                      ? data.loading_charges
                      : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.unloading_charges
                      ? data.unloading_charges
                      : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.packing_charges
                      ? data.packing_charges
                      : "---"}
                  </p>

                  <p className="font-bold">
                    {data && data.stationary_charges
                      ? data.stationary_charges
                      : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.actual_weight ? data.actual_weight : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.charged_weight ? data.charged_weight : "---"}
                  </p>
                  <p className="font-bold">
                    {data && data.total ? data.total : "---"}
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col">
                <div className="flex-grow p-2">
                  <p className="font-bold">
                    Issued by party/ urloading by party
                  </p>
                </div>
              </div>
            </div>

            {/* Empty Row */}

            {/* Last Row */}
            <div className="flex justify-between  border">
              <div className="w-1/2 border-r p-2">
                <p className="font-bold">Service Tax Payable By</p>
                <p className="font-bold">Consignee &#9634;</p>
                <p className="font-bold">consignor &#9634;</p>
                <p className="font-bold">Transporter &#9634;</p>
              </div>
              <div className="w-1/2 p-2">
                <p className="font-bold">Authorized Sign</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          {/* <FaPrint className="mr-2" />{" "} */}
          <ReactToPrint
            trigger={() => (
              <span>
                <button class="print-button">
                  <span class="print-icon"></span>
                </button>
              </span>
            )}
            content={() => componentRef}
          />
        </button>
      </div>
    </>
  );
};

export default PrintBill;
