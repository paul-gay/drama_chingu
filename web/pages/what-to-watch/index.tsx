import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

export default function ShowsIndex({ shows }) {
	// console.log(shows)

	return (
		<main className="max-w-7xl mx-auto my-16">
			<div className="">
				<h1 className="text-3xl mb-8 font-semibold">What To Watch</h1>
				<div className="grid grid-cols-4 gap-4">
					{shows?.map((show) => (
						// <showCard key={show._id} show={show} />

						<div key={show._id}>
							<Link href={`/shows/${show.slug.current}`}>
								<a>
									<img
										src={urlFor(show.poster)}
										alt={show.title}
										className="h-96 w-full object-cover rounded-lg"
									/>
									<h2 className="text-2xl max-w-lg mt-4">
										{show.title}
									</h2>
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