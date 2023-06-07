import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ mt: 4,}}>
      <Typography variant="body2" color="textSecondary" align="center">
        Weather App &copy; 2023
      </Typography>
    </Box>
  );
};

export default Footer;
