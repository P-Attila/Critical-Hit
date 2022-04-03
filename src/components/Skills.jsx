import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Bootstrap from "../assets/Bootstrap.png";
import Google from "../assets/Google.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full flex items-center min-h-screen bg-zinc-900 text-gray-300 py-20"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex-flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-teal-400">
						Skills
					</p>
					<p className="py-4">// These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon html-icon"></div>
						<p className="my-4">HTML</p>
					</div>
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon css-icon"></div>
						<p className="my-4">CSS</p>
					</div>
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon javascript-icon"></div>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon react-icon"></div>
						<p className="my-4">React</p>
					</div>
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon bootstrap-icon"></div>
						<p className="my-4">Bootstrap</p>
					</div>
					<div className="hover:scale-110 duration-500">
					<div className="w-20 h-20 skill-icon tailwind-icon"></div>
						<p className="my-4">Tailwind</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<div className="w-20 h-20 skill-icon google-icon"></div>
						<p className="my-4">Google</p>
					</div>
					<div className="hover:scale-110 duration-500">
						<div className="w-20 h-20 skill-icon github-icon"></div>
						<p className="my-4">GitHub</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
