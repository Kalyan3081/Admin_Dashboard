import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import LineChart from '../../components/LineChart'

const Line = () => {
    return (
        <Box m="20px">
            <Header title={"LINE CHART"} subtitle="Simple Line Chart" />
            <Box height="64vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line
