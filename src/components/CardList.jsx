import React from 'react';
import TrackingCard from './TrackingCard';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { RecyclingContext } from '../App';


const CardList = () => {
    let recyclingTypes = useContext(RecyclingContext).recyclingTypes;

    return (
        <Stack spacing={2} sx={{ width: '350px' }}>
            {recyclingTypes.map((entry, index) => (
                <TrackingCard
                    key={index}
                    text={entry.type}
                    number={entry.number}
                />
            ))}
        </Stack>
    );
};
export default CardList;
