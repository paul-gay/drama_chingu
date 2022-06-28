export default {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
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
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "shows",
			title: "Shows",
			type: "array",
			of: [{type: "reference", to: {type: "show"}}],
		},
	],
};
