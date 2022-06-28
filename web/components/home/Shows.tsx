import React from 'react'
import ShowCard from './ShowCard';

export default function Shows({ shows }) {
	// console.log(shows);

	return (
		<>
			<div className="mb-8 py-8">
				<h1 className="font-normal text-xl">
					Get Started with these{" "}
					<span className="font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
						Currently Airing Shows
					</span>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{shows?.map((show) => (
						<ShowCard key={show._id} show={show} />
					))}
				</div>
			</div>
		</>
	);
}

