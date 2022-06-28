import React from 'react'
import { client } from '../../lib/client';
import ReviewCard from './ReviewCard';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faArrowRight, faArrowLeft, faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ reviews }) {
    // console.log(shows)

    return (
		<>
			<div className="py-16 max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
				<div className="flex justify-between items-center">
					<h2 className="max-w-md text-4xl tracking-wide font-light">
						Check Out Our{" "}
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
							Latest Reviews
						</span>
					</h2>
					<FontAwesomeIcon
						icon={faArrowRight}
						style={{fontSize: 30, color: "black"}}
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					{reviews?.map((review) => (
						<ReviewCard key={review._id} review={review} />
					))}
				</div>
			</div>
		</>
	);
}
