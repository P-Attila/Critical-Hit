import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] hover:cursor-pointer flex justify-between items-center px-4 bg-zinc-900 text-gray-300 z-50">
			<a href="/">
				<p className="text-4xl text-yellow-300">
					critical
					<span className="text-teal-400">HIT</span>
				</p>
			</a>

			{/* menu */}
			<ul className="hidden md:flex">
				<li className="hover:border-b-4 border-teal-400 hover:mt-[3px]">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="hover:border-b-4 border-teal-400 hover:mt-[3px]">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="hover:border-b-4 border-teal-400 hover:mt-[3px]">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="hover:border-b-4 border-teal-400 hover:mt-[3px]">
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="hover:border-b-4 border-teal-400 hover:mt-[3px]">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/attila-polg%C3%A1r-352869223/"
							target="_blank"
							rel="opener noreferrer"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/P-Attila"
							target="_blank"
							rel="opener noreferrer"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/downloads/CV-Attila_Polgar.pdf"
							target="_blank"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
