import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}) {
	useEffect(() => {
		console.log('Show component');
		console.log(user);
		return () => {
			console.log('Hide component');
			console.log(user);
		};
	}, [user]);
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'green' : 'black'
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>
			&nbsp;
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>Remove</button>
		</div>
	);
}

function UserList({users, onRemove, onToggle}) {
	return (
		<div>
			{users.map((user, index) => (
				<User
					user={user}
					key={index}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
}

export default React.memo(UserList);
