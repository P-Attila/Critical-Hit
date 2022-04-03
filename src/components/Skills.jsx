import React from "react";

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
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon html-icon"></div>
							<div class="skill-icon html-icon"></div>
						</div>
						<p className="my-4">HTML</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon css-icon"></div>
							<div class="skill-icon css-icon"></div>
						</div>
						<p className="my-4">CSS</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon javascript-icon"></div>
							<div class="skill-icon javascript-icon"></div>
						</div>
						<p className="my-4">JavaScript</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon react-icon"></div>
							<div class="skill-icon react-icon"></div>
						</div>
						<p className="my-4">React</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon bootstrap-icon"></div>
							<div class="skill-icon bootstrap-icon"></div>
						</div>
						<p className="my-4">Bootstrap</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon tailwind-icon"></div>
							<div class="skill-icon tailwind-icon"></div>
						</div>
						<p className="my-4">Tailwind</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon google-icon"></div>
							<div class="skill-icon google-icon"></div>
						</div>
						<p className="my-4">Google</p>
					</div>
					<div class="hover:scale-110 duration-500">
						<div className="skill-icon-wrapper">
							<div class="skill-icon github-icon"></div>
							<div class="skill-icon github-icon"></div>
						</div>
						<p className="my-4">GitHub</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
