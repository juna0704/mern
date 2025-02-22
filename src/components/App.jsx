import React, { useState, useEffect } from 'react';

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
	const LOCAL_STORAGE_KEY = 'contacts';
	const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);

		return savedContacts ? JSON.parse(savedContacts) : [];
	});

	const addContactHandler = (contact) => {
		const newContact = {
			...contact,
			id: Date.now(),
		};

		setContacts([...contacts, newContact]);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
	};

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<>
			<div className='ui container'>
				<Header />
				<AddContact addContactHandler={addContactHandler} />
				<ContactList contacts={contacts} getContactId={removeContactHandler} />
			</div>
		</>
	);
}

export default App;
