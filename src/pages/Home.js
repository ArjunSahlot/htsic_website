import * as React from "react";
import bookCover from "../book.jpg";

export default function Index() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="py-4 bg-blue-600">
				<div className="container mx-auto px-8">
					<nav className="flex justify-between items-center">
						<h1 className="text-4xl text-white font-epilogue">Math Book Showcase</h1>
						<ul className="flex space-x-8">
							<li>
								<a href="#" className="text-white hover:underline">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-white hover:underline">
									Contact Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-700 hover:text-white text-lg"
								>
									Get it Now
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className="flex-grow">
				<section className="bg-gray-100 py-16 text-center">
					<img src={bookCover} alt="Main cover of the Math Book" className="mx-auto w-3/8 h-auto mb-8" />
					<h2 className="text-3xl font-bold mb-4">Math Book</h2>
					<p className="text-base text-gray-700 font-barlow mb-4">
						A comprehensive guide to mastering mathematics. Authored by experienced educators.
					</p>
					<button className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 mt-4">
						Get Now
					</button>
				</section>
				<section className="bg-blue-600 py-16">
					<div className="container mx-auto px-8">
						<h2 className="text-3xl text-white mb-8 font-epilogue">Why Choose Our Math Book?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="flex items-center">
								<i className="fas fa-users text-4xl text-white mr-4"></i>
								<div>
									<h3 className="text-white font-bold text-lg">Easy to Understand</h3>
									<p className="text-white font-barlow">
										Our math book breaks down complex concepts into simple, easy-to-understand
										explanations.
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<i className="fas fa-book-open text-4xl text-white mr-4"></i>
								<div>
									<h3 className="text-white font-bold text-lg">Comprehensive Content</h3>
									<p className="text-white font-barlow">
										Our math book covers all the essential topics required for a complete understanding
										of the subject.
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<i className="fas fa-chalkboard-teacher text-4xl text-white mr-4"></i>
								<div>
									<h3 className="text-white font-bold text-lg">Expertly Written</h3>
									<p className="text-white font-barlow">
										Our math book is written by experienced educators with a deep understanding of the
										topic.
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<i className="fas fa-check-circle text-4xl text-white mr-4"></i>
								<div>
									<h3 className="text-white font-bold text-lg">Practice Questions</h3>
									<p className="text-white font-barlow">
										Each chapter includes a wide range of practice questions to reinforce learning.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-white py-16">
					<div className="container mx-auto px-8">
						<h2 className="text-3xl text-gray-800 mb-8 font-epilogue">Testimonials</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-blue-100 rounded-lg p-8">
								<div className="flex items-center mb-4">
									<i className="fas fa-user-circle text-2xl text-blue-600 mr-4"></i>
									<div>
										<h3 className="text-gray-800 font-bold">John Doe</h3>
										<p className="text-gray-600">Student</p>
									</div>
								</div>
								<p className="text-gray-700 font-barlow">
									"The math book has been incredibly helpful in improving my understanding of complex
									topics. Highly recommended!"
								</p>
							</div>
							<div className="bg-blue-100 rounded-lg p-8">
								<div className="flex items-center mb-4">
									<i className="fas fa-user-circle text-2xl text-blue-600 mr-4"></i>
									<div>
										<h3 className="text-gray-800 font-bold">Jane Smith</h3>
										<p className="text-gray-600">Teacher</p>
									</div>
								</div>
								<p className="text-gray-700 font-barlow">
									"I have been using the math book as a supplementary resource for my students and it has
									greatly enhanced their learning experience."
								</p>
							</div>
							<div className="bg-blue-100 rounded-lg p-8">
								<div className="flex items-center mb-4">
									<i className="fas fa-user-circle text-2xl text-blue-600 mr-4"></i>
									<div>
										<h3 className="text-gray-800 font-bold">Sarah Johnson</h3>
										<p className="text-gray-600">Parent</p>
									</div>
								</div>
								<p className="text-gray-700 font-barlow">
									"I purchased the math book for my child and it has been instrumental in improving their
									math skills. Thank you!"
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="py-8 bg-gray-800">
				<div className="container mx-auto px-8">
					<p className="text-center text-white text-sm font-barlow">
						© 2021 Math Book Showcase. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
