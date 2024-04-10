import * as React from 'react';
import { green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function Title() {
    return (
        <Avatar sx={{ bgcolor: green[500], margin: 'auto', width: 100, height: 100, padding: 4 }}>
            <RecyclingIcon />
        </Avatar>
    );
}
