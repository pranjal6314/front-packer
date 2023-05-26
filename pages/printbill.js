import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { FaPrint } from "react-icons/fa";
const PrintBill = () => {
  const router = useRouter();
  const { formData } = router.query;
  console.log(formData);
  const [data, setData] = useState(null);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (formData) {
      setData(JSON.parse(formData));
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    } else {
      router.push("/");
    }
  }, [router.query, formData]);
  const handlePrint = () => {
    window.print();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
  };

  return (
    <>
      <Navbar user={user} logout={logout} key={key} />
      <div className="p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Royal Freight Carriers</h1>
        </div>
        <div className="flex justify-between mt-4 border border-black p-4 ">
          <div>
            <p>Email: {data?.email}</p>
            <p>Address: 123 ABC Street, XYZ City</p>
            <p>Contact: 1234567890</p>
          </div>
          <div className=" ">
            <p>
              <strong> consignorName: </strong> {data && data?.consignorName}
            </p>
            <p>
              {" "}
              <strong> consignor Address: </strong>
              {data && data?.consignorAddress}
            </p>
          </div>
        </div>
        <div className="mt-4 border-b border-black"></div>
        <div className="flex border border-black p-4">
          <div className="w-2/3 flex flex-row  ">
            <p className="mt-4 mx-2">
              <strong>PAN No: </strong> 234r234523423
            </p>
            <p className="mt-4">
              <strong>GSTIN No: </strong> w45w52345345
            </p>
            {/* Place additional details here */}
          </div>
          <div className="w-1/3">
            <p className="mt-4">
              <strong>Notice:</strong>
            </p>
            {/* Notice section */}
            {/* Place notice content here */}
          </div>
        </div>
        <div className="flex border mt-4 border-black p-4">
          <div className="w-full flex flex-row  justify-between ">
            <p className="mt-4 mx-2">
              <strong>No: </strong> 234r234523423
            </p>
            <p className="mt-4">
              <strong>Date: </strong> {data?.date}
            </p>
            <p className="mt-4">
              <strong>From : </strong> {data?.from}
            </p>
            <p className="mt-4">
              <strong> To: </strong> {data?.to}
            </p>
            {/* Place additional details here */}
          </div>
        </div>
        <div className="mt-4 border-b border-black"></div>
        <div className="mt-4 border border-black p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th>No. of Packages</th>
                <th>Description</th>
                <th>Weight</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {/* Goods section */}
              {data &&
                data?.goods.map((item, index) => (
                  <tr key={index}>
                    <td>{item.No_of_packages}</td>
                    <td>{item.Description}</td>
                    <td>{item.Weight}</td>
                    <td>{item.rate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 border-b border-black"></div>

        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr>
                <th>No. of Packages</th>
                <th>Description</th>
                <th>Weight</th>
                <th>Rate</th>
                <th>Freight</th>
                <th>Hamali</th>
                <th>St Charge</th>
                <th>Total</th>
                <th>IGST</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Goods section */}
              {data &&
                data?.goods.map((item, index) => (
                  <tr key={index}>
                    <td>{item.No_of_packages}</td>
                    <td>{item.Description}</td>
                    <td>{item.Weight}</td>
                    <td>{item.rate}</td>
                    <td>{item.fright}</td>
                    <td>{item.hamali}</td>
                    <td>{item.st_charge}</td>
                    <td>{item.total}</td>
                    <td>{item.igst}</td>
                    <td>{item.cgst}</td>
                    <td>{item.sgst}</td>
                    <td>{item.grandtotal}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p>Amount to Pay: {data && data?.amountToPay}</p>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Signature: </p>
              {/* Signature portion */}
              {/* Place signature content here */}
            </div>
            <div className="w-1/2 text-right">
              <p>Date: {data && data?.date}</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrint}
          >
            <FaPrint className="mr-2" />
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default PrintBill;
