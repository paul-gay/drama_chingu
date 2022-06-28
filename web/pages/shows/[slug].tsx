import {client, urlFor} from "../../lib/client";
import Image from "next/image";
import groq from 'groq'
import Link from "next/link";

import PortableText from "react-portable-text";

// import { getCurrentDate } from "../../components/utils/getCurrentDate";
import ShowHero from "../../components/show/ShowHero";
import ShowReviews from "../../components/show/ShowReviews";
import ShowRecaps from "../../components/show/ShowRecaps";
import ShowTabs from "../../components/show/showtabs/ShowTabs";



export default function ShowProfile({ show }) {

	const {title, categories, thumbnail, endDate, startDate, actors, reviews, recaps, synopsis, summary, castList} = show;
	// console.log(show)

	// console.log(recaps)

	return (
		<>
			<ShowHero show={show} />
			<div className="">
				<ShowTabs reviews={reviews} recaps={recaps} show={show} actors={actors} synopsis={synopsis} castList={castList}  />
			</div>

			{/* <ShowReviews reviews={reviews} />
			<ShowRecaps recaps={recaps} /> */}
		</>
	);
}




const query = groq`*[_type == "show" && slug.current == $slug][0]{
  title,
  summary,
  "categories": categories[]-> {title, slug},
  "reviews": reviews[]-> {title, slug, poster},
  "recaps": recaps[]-> {title, slug, poster},
  "actors": actors[]->{
		name,
		image,
		slug,
	},
  thumbnail,
  endDate,
  startDate,
  synopsis,
  "castList": actors[]->{
		name,
		image,
		slug,
	},
}`;

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "show" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const {slug = ""} = context.params;
	const show = await client.fetch(query, {slug});
	return {
		props: {
			show,
		},
	};
}

