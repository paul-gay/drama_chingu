import React from 'react'
import { urlFor, client } from '../../lib/client';
import Link from 'next/link';
import Image from 'next/image';

export default function RecapCard({ recap }) {
	// console.log(recap)

	return (
		// <div className=''>
		// 	<Link href={`/recaps/${recap.slug.current}`}>
		// 		<a>
		// 			<img
		// 				src={urlFor(recap.poster)}
		// 				alt={recap.title}
		// 				className="h-full w-full object-cover rounded-lg"
		// 			/>
		// 			<h4 className="mt-4">{recap.title}</h4>
		// 		</a>
		// 	</Link>
		// </div>
		<div className="">
			<Link href={`/recaps/${recap.slug.current}`}>
				<a>
					
					<img
						src={urlFor(recap.poster)}
						alt={recap.title}
						className="h-72 w-96 md:w-88 md:h-56 lg:h-72 rounded-xl object-center object-cover"
					/>
					
					<h4 className="mt-4 text-sm lg:text-lg">{recap.title}</h4>
				</a>
			</Link>
		</div>
	);
}
