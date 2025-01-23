import React from 'react'
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { useTheme, Box } from '@mui/material';
import { tokens } from '../../../theme';

const Grids = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Row1 />

                {/* ROW 2 */}
                <Row2 />

                {/* ROW 3 */}

                <Row3 />
            </Box>
        </>
    )
}

export default Grids
