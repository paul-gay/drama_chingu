import React from 'react'
import Link from "next/link";
import { urlFor } from '../../lib/client';

export default function ShowRecaps({ recaps }) {

	return (
			<div className='max-w-7xl mx-auto'>
				<div className="mt-8">
					{/* <h2 className='font-medium'>Recaps</h2> */}
					<ul className="grid grid-cols-1 gap-4">
						{recaps?.map((recap) => (
							<li key={recap.title} className="flex items-center">
								<Link href={`/recaps/${recap.slug.current}`}>
									<a className="">
										<img
											src={urlFor(recap.poster)}
											alt={recap.title}
											className="h-72 w-full object-cover rounded-md mr-2"
										/>
										<h3 className="text-lg font-medium max-w-xs mt-2">
											{recap.title}
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
