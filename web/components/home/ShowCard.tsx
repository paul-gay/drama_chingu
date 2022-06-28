import React from 'react'
import Link from 'next/link';
import { urlFor } from '../../lib/client';

export default function ShowCard({ show }) {
  return (
		<div>
			<Link href={`/shows/${show.slug.current}`}>
				<a>
					<img
						src={urlFor(show.poster)}
						alt={show.title}
						className="h-[250px] w-[400px] md:h-[300px] md:w-[350px] lg:h-[300px] lg:w-[250px] xl:h-[400px] xl:w-[346px] object-cover overflow-hidden rounded-lg"
					/>
					<h4 className="mt-4">{show.title}</h4>
				</a>
			</Link>
		</div>
  );
}
