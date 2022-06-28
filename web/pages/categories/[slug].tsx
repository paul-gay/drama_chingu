import {client, urlFor} from "../../lib/client";
import groq from "groq";
import Link from "next/link";

export default function Category({ category }) {
	const { title, shows } = category;
	console.log(category)

	return (
		<div className="max-w-7xl mx-auto my-12">
			<h1 className="font-semibold text-4xl mb-4">Shows in {category.title}</h1>
			
			<div className="mt-16">
				<ul className="flex space-x-8">
					{shows?.map((show) => (
						<li key={show.title} className="">
							<Link href={`/shows/${show.slug.current}`}>
								<a className="">
									<img
										src={urlFor(show.poster)}
										alt={show.title}
										className="h-[275px] w-[320px] object-cover rounded-lg mr-2"
									/>
									<h4 className="">
										{show.title}
									</h4>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}





const query = groq`*[_type == "category" && slug.current == $slug][0]{
  title,
  "shows": shows[]->{
		title,
		poster,
		slug,
	},
}`;

export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "category" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({params: {slug}})),
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const {slug = ""} = context.params;
	const category = await client.fetch(query, {slug});
	return {
		props: {
			category,
		},
	};
}