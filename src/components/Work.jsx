import React from "react";
import BuySomeRecords from "../assets/BuySomeRecords.png";
import FlashCards from "../assets/Flash-Cards.png";
import GrapplingCircle from "../assets/Grappling-circle.png";
import MoviePoster from "../assets/Movie-Poster.png";
import DemoShop from "../assets/demoShop.png";

const Work = () => {
	return (
		<div
			name="work"
			className="w-full flex items-center min-h-screen text-gray-300 bg-zinc-900 py-20"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-400">
						Work
					</p>
					<p className="py-6">// Check out some of my recent work</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${GrapplingCircle})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Bootstrap 5 Onepager
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://grappling-circle.de/"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/P-Attila/Grappling-Circle"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${FlashCards})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://p-attila.github.io/FlipCard-Game/build/"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/P-Attila/FlipCard-Game"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${BuySomeRecords})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Vue JS Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://p-attila.github.io/BuyMoreRecords/"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/P-Attila/BuyMoreRecords"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${MoviePoster})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://p-attila.github.io/Movie-Poster/build/"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/P-Attila/Movie-Poster"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${DemoShop})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-xl font-bold text-white tracking-wider">
							Next.js + Shopify + Builder.io
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://demo-shop-rho.vercel.app/"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/P-Attila/demo-shop"
									target="_blank"
									rel="opener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Work;
