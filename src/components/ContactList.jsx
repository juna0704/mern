import React from 'react';

import ContactCard from './ContactCard';

export const ContactList = (props) => {
	const renderContactList = props.contacts.map((contact) => {
		return <ContactCard contact={contact} key={props.id} />;
	});
	return <div className='ui celled list '>{renderContactList}</div>;
};

export default ContactList;
