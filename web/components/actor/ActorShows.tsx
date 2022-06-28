import React from 'react'
import Link from 'next/link';
import { urlFor, client } from '../../lib/client';

export default function ActorShows({ shows }) {
  return (
		<div className="">
			<h2 className="mb-2 text-xl font-medium">Shows</h2>
			<ul className="flex space-x-8">
				{shows?.map((show) => (
					<li key={show.title} className="flex items-center">
						<Link href={`/shows/${show.slug.current}`}>
							<a className="">
								<img
									src={urlFor(show.poster)}
									alt={show.title}
									className="h-40 w-64 object-cover rounded-lg mr-2"
								/>
								<h6 className="mt-2 text-sm font-bold text-gray-700">
									{show.title}
								</h6>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
  );
}
