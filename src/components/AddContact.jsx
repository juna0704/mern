import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = ({ addContactHandler }) => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const add = (e) => {
		e.preventDefault();
		if (!state.name || !state.email || !state.phone) {
			alert('All fields are mandatory');
			return;
		}
		addContactHandler(state);
		setState({ name: '', email: '', phone: '' });
		navigate('/');
	};

	return (
		<div className='ui main'>
			<h2>Add Contact</h2>
			<form className='ui form' onSubmit={add}>
				<div className='field'>
					<label>Name</label>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={state.name}
						onChange={(e) => setState({ ...state, name: e.target.value })}
					/>
				</div>
				<div className='field'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={state.email}
						onChange={(e) => setState({ ...state, email: e.target.value })}
					/>
				</div>
				<div className='field'>
					<label>Phone</label>
					<input
						type='text'
						name='phone'
						placeholder='Phone'
						value={state.phone}
						onChange={(e) => setState({ ...state, phone: e.target.value })}
					/>
				</div>
				<button className='ui button blue'>Add</button>
			</form>
		</div>
	);
};

export default AddContact;
