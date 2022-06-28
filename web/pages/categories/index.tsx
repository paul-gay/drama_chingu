import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

export default function CategoriesIndex({ categories }) {
	// console.log(actors)

	return (
		<main className="max-w-7xl mx-auto my-16">
			<div className="">
				<h1 className="text-3xl mb-8 font-semibold">Categories</h1>
				<div className="grid grid-cols-6 gap-4">
					{categories?.map((category) => (
						// <recapCard key={recap._id} recap={recap} />

						<div key={category._id}>
							<Link href={`/categories/${category.slug.current}`}>
								<a>
									<h4 className="">
										{category.title}
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
	const categoriesQuery = `*[_type == 'category']`;
	const categories = await client.fetch(categoriesQuery);

	return {
		props: {categories},
	};
};