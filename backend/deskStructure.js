import S from '@sanity/desk-tool/structure-builder'

export default () =>
	// S.list()
	// 	.title("Base")
	// 	.items([
	// 		...S.documentTypeListItems().filter(
	// 			(listItem) => !["genre", "actor", "mood"].includes(listItem.getId())
	// 		),
	//         S.divider(),
	// 		...S.documentTypeListItems().filter(
	// 			(listItem) => !["review", "recap", "show", "blogPost"].includes(listItem.getId())
	// 		),
	// 	]);
	S.list()
		.title("Base")
		.items([
			S.documentTypeListItem("show").title("Show"),
			S.documentTypeListItem("review").title("Review"),
			S.documentTypeListItem("recap").title("Recap"),
			S.documentTypeListItem("blogPost").title("Blog Post"),
			S.divider(),
			S.documentTypeListItem("category").title("Category"),
			S.documentTypeListItem("actor").title("Actor"),
			S.documentTypeListItem("mood").title("Mood"),
		]);

// const hiddenDocTypes = (listItem) =>
// 	!["show", "review", "recap", "blogPost"].includes(
// 		listItem.getId()
// 	);

// export default () =>
// 	S.list()
// 		.title("Base")
// 		.items([
// 			S.listItem()
// 				.title("Shows")
// 				.schemaType("show")
// 				.child(S.documentTypeList("show").title("Show")),
// 			S.listItem()
// 				.title("Reviews")
// 				.schemaType("review")
// 				.child(S.documentTypeList("review").title("Review")),
// 			S.listItem()
// 				.title("Recaps")
// 				.schemaType("recap")
// 				.child(S.documentTypeList("recap").title("Recaps")),
// 			S.listItem()
// 				.title("Blog Posts")
// 				.schemaType("blogPost")
// 				.child(S.documentTypeList("blogPost").title("Blog Posts")),
// 			S.divider(),
// 			// This returns an array of all the document types
// 			// defined in schema.js. We filter out those that we have
// 			// defined the structure above
// 			...S.documentTypeListItems().filter(hiddenDocTypes),
// 		]);		