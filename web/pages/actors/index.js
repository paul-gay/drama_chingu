import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

export default function ReacapsIndex({ actors }) {
	// console.log(actors)

	return (
		<main className="max-w-5xl xl:max-w-7xl mx-auto my-16">
			<div className="">
				<h1 className="text-3xl mb-8 font-semibold">Actors</h1>
				<div className="grid grid-cols-4 xl:grid-cols-5 gap-4">
					{actors?.map((actor) => (
						// <recapCard key={recap._id} recap={recap} />

						<div key={actor._id}>
							<Link href={`/actors/${actor.slug.current}`}>
								<a>
									<img
										src={urlFor(actor.image)}
										alt={actor.name}
										className="h-48 w-full object-cover rounded-lg"
									/>
									<h2 className="text-lg font-medium max-w-lg mt-2">
										{actor.name}
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
	const actorQuery = `*[_type == 'actor']`;
	const actors = await client.fetch(actorQuery);

	return {
		props: {actors},
	};
};