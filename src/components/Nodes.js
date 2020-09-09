import React from 'react';
import './nodes.css';
import { Input } from 'antd';
import { notification } from 'antd';
import Drawer from './drawer'


const { Search } = Input;



const openNotificationWithIcon = (type) => {
	 if (type === 'success') {
		  notification['success']({
				message: 'Profile Added',
				description:
					 'Profile request you made is successfully added and arranged in sorted order',
		  });
	 }
	 else {
		  notification['error']({
				message: 'Unable to locate the profile',
				description:
					 'Profile you requested to search is either not available or the format is not correct. Please check the format.',
		  });
	 }
};

const Nodes = (props) => {


const handleInput=(val)=>{
   props.input(val);
}


	 return (
		  <div className="container">
				<div className="gitHeader">
					  <h1><span>GitHub</span>&nbsp;Compare</h1>
					  <div className="headerInfo">
							 <p>A simple open ended React based application to compare your Git profiles.</p>
					  </div>
				</div>
				<div className="searchDiv">
					 <div className="searchBox">
						  <Search
								placeholder="Enter a valid Git name"
								enterButton="Compare"
								size="large"
								onSearch={(value) => {
									 if (value){
										  openNotificationWithIcon('success');
										  handleInput(value);
									 }
									 else{
										  openNotificationWithIcon('error')
									 }
								}}
						  />
					 </div>
				</div>
				<Drawer />
		  </div>
	 );
}

export default Nodes;