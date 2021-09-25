import react from 'react';

function Hello({name, color}) {
	return <div style={{color}}>Hello {name}!</div>;
}

Hello.defaultProps = {
	name: 'unknown',
	color: 'green'
}

export default Hello;
