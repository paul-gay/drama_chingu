import {client, urlFor} from "../../lib/client";
// import Image from "next/image";
// import groq from "groq";
// import Link from "next/link";

import PortableText from "react-portable-text";

import ShowCategories from "./ShowCategories";
import ShowMainCast from "./ShowMainCast";
import ShowTitle from "./ShowTitle";
import ShowAiring from "./ShowAiring";
import ShowPoster from "./ShowPoster";
import ShowSynopsis from "./ShowSynopsis";
import ShowSummary from "./ShowSummary";

export default function ShowHero({ show }) {
    const {title, categories, thumbnail, endDate, startDate, actors, synopsis, summary} = show;

	// console.log(show)
    
	return (
		<>
			<div className="mb-16">
				<div className="max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto my-12 flex flex-col lg:flex-row justify-between items-center gap-16">
					<div className="w-full lg:w-1/3">
						<div className="sm:block lg:hidden">
							<ShowTitle title={title} />
						</div>

						<ShowPoster thumbnail={thumbnail} title={title} />
					</div>
					<div className="w-full lg:w-2/3">
						<ShowAiring endDate={endDate} startDate={startDate} />
						<ShowTitle title={title} />
						<ShowCategories categories={categories} />
						{/* <ShowSynopsis synopsis={synopsis} /> */}
						<ShowSummary summary={summary} />
						<ShowMainCast actors={actors} />
					</div>
				</div>
			</div>
		</>
	);
}
