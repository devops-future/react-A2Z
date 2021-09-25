import react from 'react';

function Hello({name, color, isSpecial}) {
	return (
		<div style={{color}}>
			{isSpecial && <b>*</b>}
			Hello {name}!
		</div>
	);
}

Hello.defaultProps = {
	name: 'unknown',
	color: 'green'
}

export default Hello;
