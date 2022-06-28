export default {
	name: "actor",
	type: "document",
	title: "Actor",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			description:
				"Some frontends will require a slug to be set to be able to show the person",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "image",
			type: "mainImage",
			title: "Image",
		},
		{
			name: "bio",
			type: "simpleBlockContent",
			title: "Bio",
		},
		{
			name: "shows",
			title: "Shows",
			type: "array",
			of: [{type: "reference", to: {type: "show"}}],
		},
	],
	preview: {
		select: {
			title: "name",
			subtitle: "slug.current",
			media: "image",
		},
	},
};