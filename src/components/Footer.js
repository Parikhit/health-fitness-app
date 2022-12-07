import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Box mt='80px' bgcolor='#eee'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <img src={Logo} alt='logo' width='80px' height='80px' />
                <Typography variant='h6'>Health & Fitness App &copy; 2022. All Rights Reserved.</Typography>
                <Typography pb='40px' mt='20px'>
                    Project by Parikhit Baruah.
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;
