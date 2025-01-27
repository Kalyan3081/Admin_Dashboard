import { Box, useTheme } from '@mui/material'
import React from 'react'
import GeographyChart from '../../components/GeographyChart'
import { tokens } from '../../theme'
import Header from '../../components/Header.jsx'

const Geography = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
            <Box height="63vh" border={`1px solid ${colors.grey[100]}`}
                borderRadius="4px">
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography
