import React from 'react';

import BodyContainer from '../../components/Common/Misc/BodyContainer.component';
import LeftTitle from '../../components/Common/Misc/LeftTitle.component';
import MemberCardsContainer from '../../components/Common/Misc/MemberCardsContainer.component';
import MemberCard from '../../components/Common/Misc/MemberCard.component';

import { alumni } from '../../data/data.utils';

const Alumni = () => (
	<BodyContainer>
		<LeftTitle page="alumni">Alumni</LeftTitle>
		<MemberCardsContainer page="alumni">
			{alumni.map((member,idx) => (
				<MemberCard key={`alumni-${idx}`}>
					<img src={member.image} alt={`alumni-img-${idx}`} />
					<div className="member-name">{`${member.firstName} ${member.lastName} '${member.gradYear.toString().slice(2)}`}</div>
					<div>{`${member.position} at ${member.company}`}</div>
					<div>{`${member.email}`}</div>
				</MemberCard>
			))}
		</MemberCardsContainer>
	</BodyContainer>
);

export default Alumni;