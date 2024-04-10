import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


export default function Navigation() {
	const [value, setValue] = React.useState('log');

    let navigate = useNavigate(); 

    const routeChange = (route) =>{
      let path = '/TheLorissesFrontEnd/' + route; 
      navigate(path);
    }

	const handleChange = (event, newValue) => {
		setValue(newValue);
        routeChange(newValue);
        // Add code to navigate to the selected page
        
	};

	return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
		<BottomNavigation
			sx={{ width: '100vw' }}
			value={value}
			onChange={handleChange}>
			<BottomNavigationAction
				label='Log'
				value='log'
				icon={<AddCircleIcon />}
			/>
			<BottomNavigationAction
				label='Tracker'
				value='tracker'
				icon={<BarChartIcon />}
			/>
		</BottomNavigation>
        </Paper>
	);
}
