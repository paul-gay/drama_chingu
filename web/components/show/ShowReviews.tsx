import React from 'react'
import Link from "next/link";
import { urlFor } from '../../lib/client';

export default function ShowReviews({ reviews }) {
    // console.log(reviews)

  return (
		<div className='max-w-7xl mx-auto'>
			<div className="mt-8">
				{/* <h2 className='font-medium'>Reviews</h2> */}
				<ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
					{reviews?.map((review) => (
						<li key={review.title} className="flex items-center">
							<Link href={`/reviews/${review.slug.current}`}>
								<a className="">
									<img
										src={urlFor(review.poster)}
										alt={review.title}
										className="h-72 w-96 object-cover rounded-md mr-2"
									/>
									<h3 className="text-lg font-medium max-w-xs mt-2">
										{review.title}
									</h3>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
  );
}
