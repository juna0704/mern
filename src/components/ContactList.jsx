import React from 'react';
import { Link } from 'react-router-dom';

import ContactCard from './ContactCard';

export const ContactList = (props) => {
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map((contact) => {
		return (
			<ContactCard
				contact={contact}
				key={contact.id}
				clickHandler={deleteContactHandler}
			/>
		);
	});
	return (
		<div className='ui hidden divider'>
			<div className='ui celled list '>{renderContactList}</div>
			<h2>
				Contact List
				<Link to='/add'>
					<button className='ui button blue'>Add Contact</button>
				</Link>
			</h2>
		</div>
	);
};

export default ContactList;
