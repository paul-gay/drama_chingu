import React from 'react'
import { useState } from 'react'
import { urlFor } from '../../../lib/client'
import ShowTabNavItem from './ShowTabNavItem';
import ShowTabContent from './ShowTabContent';
import ShowTabsRecaps from './ShowTabsRecaps';
import ShowReviews from '../ShowReviews';
import ShowOverview from '../ShowOverview';





const Tabs = ({recaps, reviews, show, actors, synopsis, castList}) => {
	const [activeTab, setActiveTab] = useState("tab1");
	// console.log(castList)

	return (
		<div className="Tabs">
			<div className='bg-white mb-8 shadow-xl shadow-slate-50 border-y-2 border-slate-100'>
				<ul className="nav flex space-x-36 justify-center">
					<ShowTabNavItem
						title="About"
						id="tab1"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<ShowTabNavItem
						title="Recaps"
						id="tab2"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<ShowTabNavItem
						title="Reviews"
						id="tab3"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<ShowTabNavItem
						title="Blog Posts"
						id="tab4"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</ul>
			</div>

			<div className="outlet max-w-7xl mx-auto mt-16">
				<ShowTabContent id="tab1" activeTab={activeTab}>
					<ShowOverview show={show} synopsis={synopsis} castList={castList} />
				</ShowTabContent>
				<ShowTabContent id="tab2" activeTab={activeTab}>
					{/* <p>Tab 1 works!</p> */}
					<ShowTabsRecaps recaps={recaps} />
				</ShowTabContent>
				<ShowTabContent id="tab3" activeTab={activeTab}>
					<ShowReviews reviews={reviews} />
				</ShowTabContent>
				<ShowTabContent id="tab4" activeTab={activeTab}>
					<p>Tab 3 works!</p>
				</ShowTabContent>
			</div>
		</div>
	);
};

export default Tabs;

