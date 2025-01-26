import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

const Pie = () => {
    return (
        <Box m="20px">
            <Header title={"PIE CHART"} subtitle="Simple Pie Chart" />
            <Box height="65vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie
