import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-zinc-900">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full fadeIn">
				<p className="text-yellow-300">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-teal-400">
					Attila Polgar
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Frontend Developer (React Js).
				</h2>
				<p className="max-w-[700px] text-xl text-center font-bold text-red-300 relative top-24 player2">
					CRITICAL! CRITICAL! CRITICAL!</p>
					<p className="text-2xl text-center font-bold text-red-500 relative top-8 player2">
					CRITICAL! CRITICAL! CRITICAL! CRITICAL!</p>
					<p className="text-xl text-center font-bold text-red-400 relative top-12 player2">
					CRITICAL! CRITICAL!</p>
					<p className="text-6xl sm:text-8xl text-center font-bold text-red-700 animate-pulse glitch">
					CRITICAL! </p>
					<p className="text-3xl text-center font-bold text-red-400 player2">
					CRITICAL! CRITICAL! CRITICAL<span className="text-teal-400 player2">HIT</span></p>

				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-400 hover:border-teal-400">
						View Work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
