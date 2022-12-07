import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' },
            }}
            position='relative'
            p='20px'
        >
            <Typography color='#160647' fontWeight='600' fontSize='26px' variant='h3'>
                Health and Fitness
            </Typography>
            <Typography
                fontWeight='700'
                sx={{
                    fontSize: { lg: '44px', xs: '40px' },
                }}
                mb='23px'
                mt='30px'
            >
                Fitter, healthier <br /> and happier
            </Typography>

            <Typography fontSize='22px' lineHeight='35px' mb='5px'>
                Check out the most effective exercises.
            </Typography>

            <Button
                variant='contained'
                href='#exercises'
                sx={{
                    backgroundColor: '#160647',
                    padding: '10px',
                }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight='600'
                color='#160647'
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' },
                }}
                fontSize='200px'
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
        </Box>
    );
};

export default HeroBanner;
