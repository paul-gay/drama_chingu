import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

export default function ShowsIndex({ shows }) {
	// console.log(shows)

	return (
		<main className="mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl  my-16">
			<div className="">
				<h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
					Shows
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
					{shows?.map((show) => (
						// <showCard key={show._id} show={show} />

						<div key={show._id}>
							<Link href={`/shows/${show.slug.current}`}>
								<a>
									<img
										src={urlFor(show.poster)}
										alt={show.title}
										className="h-56 w-full object-cover rounded-lg"
									/>
									<h4 className="mt-4">{show.title}</h4>
								</a>
							</Link>
							{/* <img
								src={urlFor(review.poster)}
								alt={review.title}
								className="h-72 w-full object-cover rounded-lg"
							/>
							<h2 className="text-2xl max-w-lg mt-4">
								{review.title}
							</h2> */}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}


export const getServerSideProps = async () => {
	const showQuery = `*[_type == 'show']`;
	const shows = await client.fetch(showQuery);

	return {
		props: {shows},
	};
};