import './list.css';
import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
const listData = [];

const ListNode = () => {

	

	// const name = useSelector(state => state.name);
	// const avatar_url = useSelector(state => state.avatar_url);
	// const public_repos = useSelector(state => state.public_repos);
	// const followers = useSelector(state => state.followers);
	// const following = useSelector(state => state.following);
	// const bio = useSelector(state => state.bio);
	// const url = useSelector(state => state.url);
	const getAllData = useSelector(state => state?.allData);

	getAllData &&  getAllData.sort((a,b)=>(a.followers > b.followers ? -1 : 1));
	console.log(getAllData);
	

	console.log(listData);
	
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	return (
		<div className="lisMain">
			<div className="lischild">
				<List
					itemLayout="vertical"
					size="large"
					dataSource={getAllData ? getAllData : ""}
					renderItem={item => (
						<List.Item
							key={item?.title}
							actions={[
								<IconText icon={StarOutlined} text={item?.followers + " " +"Followers"} key="list-vertical-star-o" />,
								<IconText icon={LikeOutlined} text ={item?.following + " " +"Following"} key="list-vertical-like-o" />,
								<IconText icon={MessageOutlined} text={item?.public_repos + " " +"Public_Repos"} key="list-vertical-message" />,
							]}
						>
							<List.Item.Meta
								avatar={<Avatar src={item?.avatar_url} />}
								title={<a href={item.href}>{(item.name !== null)? item.name: 'User not Available'}</a>}
								description={(item.bio !== null)?  item.bio : 'No information provided.'}
							/>
							{item?.content}
						</List.Item>
					)}
				/>
		 
			</div>
		</div>
	)

}

export default ListNode;