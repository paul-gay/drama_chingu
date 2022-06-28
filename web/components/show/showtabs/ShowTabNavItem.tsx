import React from 'react'

const ShowTabNavItem = ({id, title, activeTab, setActiveTab}) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<div className="text-lg font-medium text-gray-500 cursor-pointer hover:text-blue-800">
			<li
				onClick={handleClick}
				className={
					activeTab === id
						? "active text-blue-900 border-blue-900 border-b-4 py-4"
						: "py-4"
				}
			>
				{title}
			</li>
		</div>
	);
};
export default ShowTabNavItem;

