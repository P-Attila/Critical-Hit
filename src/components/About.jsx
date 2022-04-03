import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-zinc-900 text-gray-300">
			{/* Container */}
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-teal-400">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor.</p>
					</div>
					<div>
						<p>
							Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
							Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor
							hodor;Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor.
							Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor
							hodor;
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
