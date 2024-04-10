import * as React from 'react';
import logo from '../assets/wwblogo.png';
import Box from '@mui/material/Box';

export default function Title() {
	return (
		//Center the image in a div and give it a margin
		<Box
			component='img'
			sx={{
				height: 200,
				width: 200,
			}}
			alt='The house from the offer.'
			src={logo}
		/>
	);
}
