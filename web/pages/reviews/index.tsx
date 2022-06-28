import React from 'react'
import { client, urlFor } from '../../lib/client'
import ReviewCard from '../../components/ReviewCard';
import Link from "next/link";


export default function ReviewsIndex({ reviews }) {
    // console.log(reviews)

    return (
		<>

			<main className="max-w-5xl xl:max-w-7xl mx-auto my-16">
				<div className="">
					<h1 className="text-3xl mb-8 font-semibold">
						Latest Reviews
					</h1>
					<div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
						{reviews?.map((review) => (
							// <ReviewCard key={review._id} review={review} />

							<div key={review._id} className=''>
								<Link href={`/reviews/${review.slug.current}`}>
									<a>
										<img
											src={urlFor(review.poster)}
											alt={review.title}
											className="h-56 w-full object-cover rounded-lg shadow-lg"
										/>
										<h4 className="max-w-xs mt-2">
											{review.title}
										</h4>
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
		</>
	);
}


export const getServerSideProps = async () => {
    const reviewQuery = `*[_type == 'review']`;
	const reviews = await client.fetch(reviewQuery);

	return {
		props: {reviews},
	};
};