export default {
	title: "Recap",
	name: "recap",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			title: "Poster",
			name: "poster",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			title: "Thumbnail",
			name: "thumbnail",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			title: "Cover Image",
			name: "coverImage",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "body",
			type: "blockContent",
			title: "Body",
		},
	],
};