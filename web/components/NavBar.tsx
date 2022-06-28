import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';



export default function NavBar() {
	const router = useRouter();

	return (
		<div className="bg-white shadow-md">
			<div className="max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto py-4 flex justify-between items-center">
				<div>
					<Link href={"/"}>
						<a href="">
							<h3 className="mb-0 font-SpaceGrotesk text-transparent bg-clip-text bg-gradient-to-t from-gray-700 via-gray-900 to-black">
								Drama Decider
							</h3>
						</a>
					</Link>
				</div>
				<div className="flex space-x-8">
					{/* <Link href={"/what-to-watch"}>
							<a href="">
								<p className="mb-0 text-sm">What To Watch</p>
							</a>
						</Link> */}
					<Link href={"/shows"}>
						<a
							href=""
							className={`mb-0 font-notoSans tracking-wide text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]  ${
								router.pathname == "/shows"
									? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
									: "text-gray-900"
							}`}
						>
							Shows
							{/* <p className="mb-0 font-notoSans text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
									Shows
								</p> */}
						</a>
					</Link>
					<Link href={"/reviews"}>
						<a
							href=""
							className={`mb-0 font-notoSans tracking-wide text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ${
								router.pathname == "/reviews"
									? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
									: "text-gray-900"
							}`}
						>
							Reviews
							{/* <p className="mb-0 font-notoSans text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
								Reviews
							</p> */}
						</a>
					</Link>
					<Link href={"/recaps"}>
						<a
							href=""
							className={`mb-0 font-notoSans tracking-wide text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ${
								router.pathname == "/recaps"
									? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
									: "text-gray-900"
							}`}
						>
							Recaps
							{/* <p className="mb-0 font-notoSans text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
								Recaps
							</p> */}
						</a>
					</Link>
					<Link href={"/actors"}>
						<a
							href=""
							className={`mb-0 font-notoSans tracking-wide text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ${
								router.pathname == "/actors"
									? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
									: "text-gray-900"
							}`}
						>
							Actors
							{/* <p className="mb-0 font-notoSans text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
								Actors
							</p> */}
						</a>
					</Link>
					<Link href={"/blog"}>
						<a
							href=""
							className={`mb-0 font-notoSans tracking-wide text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ${
								router.pathname == "/blog"
									? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
									: "text-gray-900"
							}`}
						>
							Blog
							{/* <p className="mb-0 font-notoSans text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
								Blog
							</p> */}
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
