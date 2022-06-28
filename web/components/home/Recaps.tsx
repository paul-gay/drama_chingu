import React from 'react'
import { client, urlFor } from '../../lib/client';
import Link from 'next/link';

import RecapCard from './RecapCard';

export default function Recaps({ recaps }) {
    // console.log(recaps)


    return (
		<>
			<div className="max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="max-w-lg text-4xl tracking-wide font-light">
						Stay Up To Date With Our{" "}
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
							Latest Recaps
						</span>
					</h1>
					<Link href={`/recaps`}>
						<a href="">See All Recaps</a>
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{recaps?.map((recap, index) => (
						<div key={recap.id} className="">
							<RecapCard key={recap._id} recap={recap} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}


{/* <div className="grid grid-cols-3">
	{recaps?.map((recap, index) => (
		<div key={recap.id} className={`col-span-${index === 0 ? "2" : "1"}`}>
			<Link href={`/recaps/${recap.slug.current}`}>
				<a>
					<div>
						<img
							src={urlFor(recap.poster)}
							alt={recap.title}
							className="w-full h-full object-center object-cover"
						/>
					</div>
					<h4 className="mt-4">{recap.title}</h4>
				</a>
			</Link>
			{/* <RecapCard key={recap._id} recap={recap} /> 
			*/
			
}
		
	
