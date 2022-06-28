import React from 'react'
import Link from 'next/link';

import { urlFor } from '../../lib/client';


export default function ReviewCard({ review }) {
  return (
		<div>
			<Link href={`/reviews/${review.slug.current}`}>
				<a>
					<img
						src={urlFor(review.poster)}
						alt={review.title}
						className="h-[240px] w-[370px] md:h-[210px] md:w-[380px] lg:h-[325px] lg:w-[350px] xl:h-[345px] xl:w-[410px] object-cover rounded-lg"
					/>
					<h4 className="mt-4 text-md lg:text-lg">{review.title}</h4>
				</a>
			</Link>
		</div>
  );
}
