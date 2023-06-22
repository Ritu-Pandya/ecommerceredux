import React from 'react'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Carddata = ({ carddata }) => {
    return (
            <Container>
                <CardMedia
                    component="img"
                    alt={carddata.title}
                    height="300"
                    sx={{ objectFit: 'revert' }}
                    image={carddata.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {carddata.title}
                    </Typography>
                    <Typography color='darkblue'>
                        ${carddata.price}
                    </Typography>
                        {carddata.qty?"Quantity:"+carddata.qty:""}
                    <Typography>
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        {carddata.description.slice(0,20).concat("...")}
                    </Typography> */}
                </CardContent>
            </Container>
        
  
    )
}

export default Carddata