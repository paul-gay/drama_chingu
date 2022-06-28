import React from 'react'
import { getCurrentDate } from '../utils/getCurrentDate';


const today = new Date();
const currentDate =
	today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export default function ShowAiring({endDate, startDate}) {
	console.log(endDate, startDate, currentDate)

	return (
			<>
				{(() => {
					if (endDate < currentDate ) {
						return (
							<div className="flex align-center items-center mb-4">
								<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
								<p className="mx-2 text-sm text-green-500 mb-0">
									Currently Airing
								</p>
							</div>
						);
					} else {
						return <div>Not Airing</div>;
					}
				})()}
			</>
	);
}
