import {client, urlFor} from "../../lib/client";

export default function Review({shows, show}) {
	return <div>{show.title}</div>;
}

export const getStaticPaths = async () => {
	const query = `*[_type == "show"] {
    slug {
      current
    }
  }
  `;

	const shows = await client.fetch(query);

	const paths = shows.map((show) => ({
		params: {
			slug: show.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({params: {slug}}) => {
	const query = `*[_type == "show" && slug.current == '${slug}'][0]`;
	const showsQuery = '*[_type == "show"]';

	const show = await client.fetch(query);
	const shows = await client.fetch(showsQuery);

	// console.log(show);

	return {
		props: {shows, show},
	};
};
