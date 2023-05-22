import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ user, logout }) => {
  const ref = useRef(null);

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="text-black body-font bg-sky-100 ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
              <Image height={40} width={200} src="/main-logo.png" alt="" />
            </a>
          </Link>
          <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center p-5 ">
            <Link href={"/home"}>
              {" "}
              <li>Home</li>
            </Link>
            <Link href={"/home"}>
              {" "}
              <li>Profile</li>
            </Link>
          </nav>
          <div className="pr-5 flex cart cursor-pointer ">
            {user.value && (
              <Link href={"/"}>
                <button
                  onClick={logout}
                  className=" bg-sky-400 px-2 py-1 rounded-md text-sm text-white mx-2"
                >
                  logut
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
