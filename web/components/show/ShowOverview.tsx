import { useState } from 'react';
import { urlFor } from '../../lib/client';
import { PortableText } from '@portabletext/react';

import ShowMainCast from './ShowMainCast';
import ShowSynopsis from './ShowSynopsis';
import ShowFullCast from './ShowFullCast';


export default function ShowOverview({ show, synopsis, castList }) {

	const [readMoreActive, setReadMoreActive] = useState(false);

	const SynopsisComponent = {};
  
	return (
		<div className="md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto flex gap-12">
			<div className="w-full lg:w-2/3">
				<div className='lg:max-w-xl xl:max-w-2xl'>
					<div className={readMoreActive ? "line-clamp-none" : "line-clamp-5"}>
						<PortableText
							value={synopsis}
							components={SynopsisComponent}
						/>
					</div>
				</div>
				<button
					onClick={function(event) {
						setReadMoreActive(!readMoreActive);
						
					}}
					className="text-base font-medium my-4"
				>
					Read { readMoreActive ? "Less -" : "More +"}
				</button>

				<div className="flex space-x-2 mt-4 items-center align-middle">
					<p className="mb-0 font-bold text-lg">Airing Schedule:</p>
					<p className="mb-0">
						{show.startDate} - {show.endDate}
					</p>
				</div>
			</div>

			<div className="">
				<ShowFullCast castList={castList} />
			</div>
		</div>
	);
}

