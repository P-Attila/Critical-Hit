import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full flex items-center min-h-screen bg-zinc-900 text-gray-300"
		>
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
						<p>
							I'm a very self-conscious person who, for the sake of momentary
							benefits, does not forget what he owes himself.
						</p>
					</div>
					<div>
						<p>
							Blunt, big nose, weird mustache, and miserable face. Her health is
							not entirely okay: she was injured, has high blood pressure, so
							she should refrain from excessive physical exertion, and because
							of her space, she likes to stay in closets. In the opinion of his
							legionary superiors, he is “the pure breed of the spit citizen,”
							an unfortunate spiritual figure, an anti-soldier, a primitive
							civilian. He always has his own opinion on everything.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
