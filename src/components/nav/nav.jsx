import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <RiCodeBoxFill className="icon" />
      </a>
      <a href="#members">
        <AiFillFolderOpen className="icon" />
      </a>
      <a href="#contact">
        <IoMdContact className="icon" />
      </a>
      <a href="#footer">
        <BsFillArrowDownSquareFill className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
