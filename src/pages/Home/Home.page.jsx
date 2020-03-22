import React from 'react';

// Components
import LeftCard from '../../components/Home/LeftCard.component';
import SearchBar from '../../components/Common/Misc/SearchBar.component';
import RightColumn from '../../components/Home/RightColumn.component';
import PicDescripCard from '../../components/Home/PicDescriptCard.component';
import CenterTitle from '../../components/Home/CenterTitle.component';
import MemberCard from '../../components/Home/MemberCard.component';

// SVGs
import { ReactComponent as Monitor } from '../../assets/images/Monitor.svg';
import { ReactComponent as Branch } from '../../assets/images/Branch.svg';

// Data
import { details, members } from '../../data/data.utils';

// SCSS
import './Home.scss';

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
					{details.map((dataRow,idx) => (
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
				<CenterTitle>Committee Members</CenterTitle>
			</div>
			<div className="home-committee-members-section">
				{members.map((member,idx) => (
					<MemberCard key={`member-${idx}`}>
						<img src={member.image} alt={`member-img-${idx}`} />
						<div className="member-name">{member.nameYear}</div>
						<div>{member.description}</div>
					</MemberCard>
				))}
			</div>
		</div>
	</div>
);

export default Home;