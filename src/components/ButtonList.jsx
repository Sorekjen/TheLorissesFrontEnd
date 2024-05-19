import React from 'react';
import CategoryButton from './CategoryButton';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { RecyclingContext } from '../App';

const ButtonList = () => {
	let recyclingTypes = useContext(RecyclingContext).recyclingTypes;

	const handleButtonClick = (index) => {
        recyclingTypes[index].number = recyclingTypes[index].number + 1;
        console.log(recyclingTypes[index].number)
    };

	return (
		<Stack
			spacing={2}
			sx={{ width: '350px' }}>
			{recyclingTypes.map((entry, index) => (
				<CategoryButton
					key={index}
					onClick={() => handleButtonClick(index)}
					text={entry.type}
				/>
			))}
		</Stack>
	);
};
export default ButtonList;
