import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<div id='footer'>
				<ul id='footer-list' style={{ paddingBottom: '0' }}>
					<li>
						<a href='#privacy'>Privacy</a>
					</li>
					<li>
						<a href='#terms'>Terms</a>
					</li>
					<li>
						<a href='#contact'>Contacts</a>
					</li>
				</ul>
				<span>Copyright 2016,Original Trombones</span>
			</div>
		</React.Fragment>
	);
};

export default Footer;
