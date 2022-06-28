import React from 'react'
import Link from 'next/link';

export default function ShowCategories({ categories }) {
  return (
		<>
			<ul className="flex space-x-4">
				{categories?.map((category) => (
					<li key={category.title}>
						<Link href={`/categories/${category.slug.current}`}>
							<a className="">
								<h4 className="text-md font-medium text-gray-600 hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
									{category.title}
								</h4>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</>
  );
}
