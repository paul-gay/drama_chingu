import React from 'react'


const ShowTabContent = ({id, activeTab, children}) => {
	return activeTab === id ? (
		<div className="TabContent">{children}</div>
	) : null;
};

export default ShowTabContent;