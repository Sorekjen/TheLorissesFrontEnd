import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { green } from '@mui/material/colors';


export default function TrackingCard({text, number}) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: green[300] }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {number} kg
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
