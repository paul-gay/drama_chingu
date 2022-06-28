import React from 'react'
import Link from 'next/link';
import { urlFor } from '../../lib/client';

export default function ShowMainCast({ actors }) {
  return (
		<div className="mt-8">
			<h2>Main Cast</h2>
			<ul className="grid grid-cols-2 space-x-0 space-y-4 lg:space-y-0 md:grid-cols-4">
				{actors?.map((actor) => (
					<li key={actor.name} className="flex items-center">
						<Link href={`/actors/${actor.slug.current}`}>
							<a className="flex items-center hover:text-slate-700 hover:scale-105 ease-in-out">
								<img
									src={urlFor(actor.image)}
									alt={actor.name}
									className="h-8 w-8 object-cover rounded-full mr-2"
								/>
								<h4 className="text-sm font-medium mb-0">
									{actor.name}
								</h4>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
  );
}
