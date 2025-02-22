import React from 'react';

class AddContact extends React.Component {
	render() {
		return (
			<div className='ui main'>
				<h2>Add Contact</h2>
				<form action='' className='ui form'>
					<div className='field'>
						<label htmlFor=''>Name</label>
						<input type='text' name='name' id='name' placeholder='Name' />
					</div>
					<div className='field'>
						<label htmlFor=''>Email</label>
						<input type='email' name='email' id='email' placeholder='Email' />
					</div>
					<div className='field'>
						<label htmlFor=''>Phone</label>
						<input type='text' name='phone' id='phone' placeholder='Phone' />
					</div>
					<button className='ui button blue'>Add</button>
				</form>
			</div>
		);
	}
}

export default AddContact;

// *******************************
// ********************************
// ***********************************
// ***********************************
// **********************************
// 	*****************************

// import React from 'react';

// const AddContact = () => {
// 	return (
// 		<>
// 			<div className='ui main'>
// 				<h2>Add Contact</h2>
// 				<form action='#' className='ui form'>
// 					<div className='field'>
// 						<label htmlFor=''>Name</label>
// 						<input type='text' name='name' id='name' placeholder='Name' />
// 					</div>
// 					<div className='field'>
// 						<label htmlFor=''>Email</label>
// 						<input type='email' name='email' id='email' placeholder='Email' />
// 					</div>
// 					<div className='field'>
// 						<label htmlFor=''>Phone</label>
// 						<input
// 							type='number'
// 							name='number'
// 							id='phone'
// 							placeholder='Phone Number'
// 						/>
// 					</div>
// 					<button className='ui button blue'>Add</button>
// 				</form>
// 			</div>
// 		</>
// 	);
// };

// export default AddContact;
