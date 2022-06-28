export default {
	title: "Simple Block Content",
	name: "simpleBlockContent",
	type: "array",
	of: [
		{
			title: "Block",
			type: "block",
			styles: [
				{title: "Normal", value: "normal"},
				{title: "H1", value: "h1"},
				{title: "H2", value: "h2"},
				{title: "H3", value: "h3"},
				{title: "H4", value: "h4"},
				{title: "H5", value: "h5"},
				{title: "H6", value: "h6"},
			],
			lists: [
				{title: "Bullet List", value: "bullet"},
				{title: "Number List", value: "number"},
			],
			marks: {
				decorators: [
					{title: "Strong", value: "strong"},
					{title: "Emphasis", value: "em"},
				],
				annotations: [
					{
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
					{
						name: "internalLink",
						type: "object",
						title: "Internal link",
						fields: [
							{
								name: "reference",
								type: "reference",
								title: "Reference",
								to: [
									{type: "actor"},
									// other types you may want to link to
								],
							},
						],
					},
				],
			},
		},
	],
};


// const simpleBlockContent = {
// 	title: "Simple Block Content",
// 	name: "simpleBlockContent",
// 	description: "Simple text block",
// 	type: "object",
// 	fields: [
// 		{
// 			name: "text",
// 			title: "Text",
// 			type: "array",
// 			of: [
// 				{
// 					title: "Block",
// 					type: "block",
// 					styles: [
// 						{title: "Normal", value: "normal"},
// 						{title: "H1", value: "h1"},
// 						{title: "H2", value: "h2"},
// 						{title: "H3", value: "h3"},
// 						{title: "H4", value: "h4"},
// 						{title: "H5", value: "h5"},
// 						{title: "H6", value: "h6"},
// 					],
// 					marks: {
// 						decorators: [
// 							{value: "strong", title: "Strong"},
// 							{value: "italic", title: "Italic"},
// 							{value: "underline", title: "Underline"},
// 						],
// 					},
// 				},
// 			],
// 		},
// 	],
// };

// export default simpleBlockContent;