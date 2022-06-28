import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

export default function ReacapsIndex({ recaps }) {
	// console.log(recaps)

	return (
		<main className="max-w-5xl xl:max-w-7xl mx-auto my-16">
			<div className="">
				<h1 className="text-3xl mb-8 font-semibold">Recaps</h1>
				<div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
					{recaps?.map((recap) => (
						<div key={recap._id}>
							<Link href={`/recaps/${recap.slug.current}`}>
								<a>
									<img
										src={urlFor(recap.poster)}
										alt={recap.title}
										className="h-56 w-full object-cover rounded-lg"
									/>
									<h4 className="max-w-xxs mt-2">
										{recap.title}
									</h4>
								</a>
							</Link>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}


export const getServerSideProps = async () => {
	const recapQuery = `*[_type == 'recap']`;
	const recaps = await client.fetch(recapQuery);

	return {
		props: {recaps},
	};
};