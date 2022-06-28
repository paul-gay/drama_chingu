import {client, urlFor} from "../../lib/client";
import Image from "next/image";
import groq from "groq";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default function Recap({ recap }) {
	const {
		title,
		body,
		poster,
		thumbnail,
		coverImage,
	} = recap;

	console.log(recap)

	const bodyComponent = {
		types: {
			image:({value}) => {
				return (
					<img
						src={urlFor(value)}
						alt={value.alt || ''}
						className="w-full h-[56] object-cover rounded-lg mb-8"
					/>
				);
			}
		}
	};

	return (
		<>
			<div className="mt-8 max-w-7xl mx-auto">
				<div className="my-16 flex justify-between items-center gap-8">
					<div className="w-1/2">
						<img
							src={urlFor(thumbnail)}
							alt={recap.title}
							className="h-[475px] object-cover rounded-lg mb-8"
						/>
					</div>

					<div className="max-w-md mx-auto text-center w-1/2">
						<h6 className="mb-2 text-medium">RECAPS</h6>
						<h2 className="mb-16">{recap.title}</h2>
					</div>
				</div>

				<div className="max-w-2xl mx-auto">
					<PortableText value={body} components={bodyComponent} />
				</div>
			</div>
		</>
	);
}

const query = groq`*[_type == "recap" && slug.current == $slug][0]{
  title,
  body,
  poster,
  thumbnail,
  coverImage,
}`;

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "recap" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const {slug = ""} = context.params;
	const recap = await client.fetch(query, {slug});
	return {
		props: {
			recap,
		},
	};
}

// export const getStaticPaths = async () => {
// 	const query = `*[_type == "recap"] {
//     slug {
//       current
//     }
//   }
//   `;

// 	const recaps = await client.fetch(query);

// 	const paths = recaps.map((recap) => ({
// 		params: {
// 			slug: recap.slug.current,
// 		},
// 	}));

// 	return {
// 		paths,
// 		fallback: "blocking",
// 	};
// };

// export const getStaticProps = async ({params: {slug}}) => {
// 	const query = `*[_type == "recap" && slug.current == '${slug}'][0]`;
// 	const recapsQuery = '*[_type == "recap"]';

// 	const recap = await client.fetch(query);
// 	const recaps = await client.fetch(recapsQuery);

// 	// console.log(recap);

// 	return {
// 		props: {recaps, recap},
// 	};
// };
