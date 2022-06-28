import React from 'react'
import { client, urlFor } from '../../lib/client'
import groq from 'groq';
import { PortableText } from '@portabletext/react';


export default function Review({ review }) {
	const {title, body, poster} = review;

	const bodyComponent = {};

	return (
		<>
			<div className="mt-8 max-w-6xl mx-auto">
				<div className="mt-16">
					<div className="max-w-lg mx-auto text-center">
						<h6 className="mb-2 text-medium">REVIEWS</h6>
						<h1 className="mb-16">{review.title}</h1>
					</div>

					<img
						src={urlFor(poster)}
						alt={review.title}
						className="h-[600px] w-full max-w-5xl mx-auto object-cover rounded-lg mb-8"
					/>
				</div>

				<div className="max-w-2xl mx-auto">
					<PortableText value={body} components={bodyComponent} />
				</div>
			</div>
		</>
	);
}

const query = groq`*[_type == "review" && slug.current == $slug][0]{
  title,
  body,
  poster,
}`;

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "review" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const {slug = ""} = context.params;
	const review = await client.fetch(query, {slug});
	return {
		props: {
			review,
		},
	};
}

// export const getStaticPaths = async () => {
// 	const query = `*[_type == "review"] {
//     slug {
//       current
//     }
//   }
//   `;

// 	const reviews = await client.fetch(query);

// 	const paths = reviews.map((review) => ({
// 		params: {
// 			slug: review.slug.current,
// 		},
// 	}));

// 	return {
// 		paths,
// 		fallback: "blocking",
// 	};
// };

// export const getStaticProps = async ({params: {slug}}) => {
// 	const query = `*[_type == "review" && slug.current == '${slug}'][0]`;
// 	const reviewsQuery = '*[_type == "review"]';

// 	const review = await client.fetch(query);
// 	const reviews = await client.fetch(reviewsQuery);

// 	// console.log(review);

// 	return {
// 		props: {reviews, review},
// 	};
// };