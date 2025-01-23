// Header Component
// import { useTheme } from '@nivo/core';
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  // Ensure 'theme.palette.mode' is correctly passed

    return (
        <Box mb="30px">
            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: '5px' }}>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.grey[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
