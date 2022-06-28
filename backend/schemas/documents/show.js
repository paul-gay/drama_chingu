export default {
	title: "Show",
	name: "show",
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
			options: {
				hotspot: true,
			},
		},
		{
			title: "Tumbnail",
			name: "thumbnail",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{type: "reference", to: {type: "category"}}],
		},
		{
			name: "summary",
			title: "Summary",
			type: "simpleBlockContent",
		},
		{
			name: "actors",
			title: "Actors",
			type: "array",
			of: [{type: "reference", to: {type: "actor"}}],
		},
		{
			name: "moods",
			title: "Moods",
			type: "array",
			of: [{type: "reference", to: {type: "mood"}}],
		},
		{
			name: "synopsis",
			title: "Synopsis",
			type: "simpleBlockContent",
		},
		{
			name: "castList",
			title: "Cast List",
			type: "array",
			of: [{type: "reference", to: {type: "actor"}}],
		},
		{
			title: "Start Date",
			name: "startDate",
			type: "date",
			options: {
				dateFormat: "MM-DD-YYYY",
				calendarTodayLabel: "Today",
			},
		},
		{
			title: "End Date",
			name: "endDate",
			type: "date",
			options: {
				dateFormat: "MM-DD-YYYY",
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "reviews",
			title: "Reviews",
			type: "array",
			of: [{type: "reference", to: {type: "review"}}],
		},
		{
			name: "recaps",
			title: "Recaps",
			type: "array",
			of: [{type: "reference", to: {type: "recap"}}],
		},
		{
			name: "blogPosts",
			title: "Blog Posts",
			type: "array",
			of: [{type: "reference", to: {type: "blogPost"}}],
		},
	],
};