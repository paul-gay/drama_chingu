export default {
	title: "Review",
	name: "review",
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
			title: "Created date",
			name: "createdDate",
			type: "date",
			options: {
				dateFormat: "YYYY-MM-DD",
				calendarTodayLabel: "Today",
			},
		},
		{
			title: "Poster",
			name: "poster",
			type: "image",
		},
		{
			title: "Release date",
			name: "releaseDate",
			type: "date",
			options: {
				dateFormat: "YYYY-MM-DD",
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "body",
			type: "blockContent",
			title: "Body",
		},
	],
};