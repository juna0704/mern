import React from 'react';
import user from '../images/user.jpg';

const ContactCard = (props) => {
	const { id, name, email, phone } = props.contact;
	return (
		<div className='ui link card' key={id}>
			<div className='ui avatar image large'>
				<img src={user} alt='user' className='ui large image' />
			</div>
			<div className='content'>
				<div className='header bg-blue-500'>{name}</div>
				<div>{email}</div>
				<div>{phone}</div>
				<div className='ui right aligned'>
					<i
						className='trash alternate outline icon large'
						style={{ color: 'red', marginTop: '10px' }}
					></i>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
