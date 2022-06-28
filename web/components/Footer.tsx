import React from 'react'

export default function Footer() {
  return (
		<>
			{/* <div className="bg-gray-900 text-white text-center border-t-4 p-4">
				<div className="max-w-7xl mx-auto text-center">
					&copy; Drama Chingu 2022
				</div>
			</div> */}
			{/* <footer className="p-4 bg-white shadow flex-col items-center justify-between md:p-6 dark:bg-gray-800">
				<h1>Drama Decider</h1>

				<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022{" "}
					<a href="https://flowbite.com" className="hover:underline">
						Drama Chingu
					</a>
					. All Rights Reserved.
				</span>
			</footer> */}

			<div className='mx-auto text-center bg-gray-900 mt-16'>
				<div className='max-w-2xl mx-auto py-12'>
					<h1 className='mb-4 text-stone-300'>Drama Decider</h1>
					<ul className="flex text-stone-200 my-6 space-x-8 text-center justify-center">
						<li>Shows</li>
						<li>Reviews</li>
						<li>Recaps</li>
						<li>Blog</li>
					</ul>
					<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2022{" "}
						<a
							href="https://flowbite.com"
							className="hover:underline"
						>
							Drama Chingu
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</>
  );
}


