import React from 'react'
import Link from "next/link";
import { urlFor } from '../../../lib/client';

export default function ShowTabsRecaps({ recaps }) {

	return (
			<div className='max-w-7xl mx-auto'>
				<div className="mt-8">
					{/* <h2 className='font-medium'>Recaps</h2> */}
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{recaps?.map((recap) => (
							<li key={recap.title} className="flex items-center">
								<Link href={`/recaps/${recap.slug.current}`}>
									<a className="">
										<img
											src={urlFor(recap.poster)}
											alt={recap.title}
											className="h-56 w-full object-cover rounded-md mr-2"
										/>
										<h4 className="font-medium max-w-xs mt-2">
											{recap.title}
										</h4>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
	);
}
