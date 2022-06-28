import {client, urlFor} from "../../lib/client";
import groq from "groq";
import Link from "next/link";

import ActorShows from '../../components/actor/ActorShows'
import ActorBio from "../../components/actor/ActorBio";

export default function Review({ actor }) {
	const { name, shows, bio } = actor;
	// console.log(actor)

	return (
		<div className="max-w-7xl mx-auto my-12">
			<h1 className="font-semibold text-4xl mb-4">{actor.name}</h1>
			<div className="flex gap-12 items-start">
				
				<div className="">
					<img
						src={urlFor(actor.image)}
						alt={actor.name}
						className="h-64 w-72 max-w-md object-cover rounded-lg"
					/>
				</div>
				
				<div>
					<ActorBio bio={bio} />
				</div>
				<ActorShows shows={shows} />
			</div>
		</div>
	);
}

// export const getStaticPaths = async () => {
// 	const query = `*[_type == "actor"] {
//     slug {
//       current
//     }
//   }
//   `;

// 	const actors = await client.fetch(query);

// 	const paths = actors.map((actor) => ({
// 		params: {
// 			slug: actor.slug.current,
// 		},
// 	}));

// 	return {
// 		paths,
// 		fallback: "blocking",
// 	};
// };

// export const getStaticProps = async ({params: {slug}}) => {
// 	const query = `*[_type == "actor" && slug.current == '${slug}'][0]`;
// 	const actorsQuery = '*[_type == "actor"]';

// 	const actor = await client.fetch(query);
// 	const actors = await client.fetch(actorsQuery);

// 	// console.log(recap);

// 	return {
// 		props: {actors, actor},
// 	};
// };


const query = groq`*[_type == "actor" && slug.current == $slug][0]{
  name,
  "shows": shows[]->{
		title,
		poster,
		slug,
	},
	image,
	bio,
}`;

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "actor" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const {slug = ""} = context.params;
	const actor = await client.fetch(query, {slug});
	return {
		props: {
			actor,
		},
	};
}