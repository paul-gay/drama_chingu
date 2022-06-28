import React from 'react'
import Link from 'next/link';
import { urlFor } from '../../lib/client';

export default function ShowFullCast({ castList }) {
  return (
		<div className="mt-8 text-center">
			<h2>Cast</h2>
			<ul className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-8 text-center">
				{castList?.map((actor) => (
					<li
						key={actor.name}
						className="text-center items-center mx-auto"
					>
						<Link href={`/actors/${actor.slug.current}`}>
							<a className="hover:text-slate-700 hover:scale-105 ease-in-out">
								<img
									src={urlFor(actor.image)}
									alt={actor.name}
									className="h-12 w-12 lg:h-32 lg:w-32 object-cover rounded-full mb-2 bg-blue-300 hover:bg-gradient-to-r p-[4px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
								/>
								<h6 className="text-sm">
									{actor.name}
								</h6>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
  );
}
