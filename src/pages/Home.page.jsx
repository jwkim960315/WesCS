import React from 'react';

// Components
import LeftCard from '../components/LeftCard/LeftCard.component';
import SearchBar from '../components/SearchBar.component';
import RightColumn from '../components/RightColumn.component';
import PicDescripCard from '../components/PicDescriptCard.component';
import Title from '../components/Title.component';
import MemberCard from '../components/MemberCard.component';
import Footer from '../components/Footer.component';

// SVGs
import { ReactComponent as Monitor } from '../assets/images/Monitor.svg';
import { ReactComponent as Branch } from '../assets/images/Branch.svg';
import BriefCase from '../assets/images/BriefCase.svg';
import Research from '../assets/images/Research.svg';
import Laptop from '../assets/images/Laptop.svg';
import Lightbulb from '../assets/images/Lightbulb.svg';

import Home_1 from '../assets/images/Home_1.png';
import Home_2 from '../assets/images/Home_2.png';
import Home_3 from '../assets/images/Home_3.png';
import Home_4 from '../assets/images/Home_4.png';
import Home_5 from '../assets/images/Home_5.png';
import Home_6 from '../assets/images/Home_6.png';

// SCSS
import './Home.scss';

const detailData = [
	{
		image: BriefCase,
		description: [
			"Jobs",
			"Interviews",
		]
	},
	{
		image: Research,
		description: [
			"Research",
			"Academics"
		]
	},
	{
		image: Laptop,
		description: [
			"Hackathons",
			"Projects",
		]
	},
	{
		image: Lightbulb,
		description: [
			"Events",
			"CS Related Stuff"
		]
	},
];

const memberData = [
	{
		image: Home_1,
		nameYear: "Tim Cook '20",
		description: 'iOS Developer at Apple'
	},
	{
		image: Home_2,
		nameYear: "Jeffrey Weiner '21",
		description: 'Web Developer at LinkedIn'
	},
	{
		image: Home_3,
		nameYear: "Satya Nadella '20",
		description: 'Junior Developer at Microsoft'
	},
	{
		image: Home_4,
		nameYear: "Sundar Pichai '22",
		description: 'Andriod Developer at Google'
	},
	{
		image: Home_5,
		nameYear: "Brian Chesky '20",
		description: 'Backend Engineer at Airbnb'
	},
	{
		image: Home_6,
		nameYear: "Mark Zuckerberg '21",
		description: 'ML Engineer at Facebook'
	},
];

const Home = () => (
	<div className="home">
		<div className="body-container">
			<div className="home-top-section">
				<LeftCard>
					<h1>Wesleyan CS Club</h1>
 					<p>An Official Computer Science Club at Wesleyan Univerisy</p>
					<SearchBar />
				</LeftCard>
				<Branch />
				<Monitor />
			</div>
			<div className="home-middle-section">
				<LeftCard>
					<h1>Mission Statement</h1>
					<p>Provide a comfortable environment for club members to freely communicate and express their ideas.</p>
				</LeftCard>
				<RightColumn>
					{detailData.map((dataRow,idx) => (
						<PicDescripCard key={`detail-${idx}`}>
							<div className="detail-img">
								<img src={dataRow.image} alt={`data-img-${idx*2}`}/>
							</div>
							{dataRow.description.map((category,index) => (
								<div key={`detail-description-${idx}-${index}`}>{category}</div>
							))}
						</PicDescripCard>
					))}
				</RightColumn>
			</div>
			<div className="home-committee-title-section">
				<Title>Committee Members</Title>
			</div>
			<div className="home-committee-members-section">
				{memberData.map((member,idx) => (
					<MemberCard key={`member-${idx}`}>
						<img src={member.image} alt={`member-img-${idx}`} />
						<div className="member-name">{member.nameYear}</div>
						<div>{member.description}</div>
					</MemberCard>
				))}
			</div>
		</div>
		<Footer />
	</div>
);

export default Home;