import React from 'react';
import { Container } from '@mui/system';
import Navbar from '../navbar/Navbar';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const data = [
    'Hlavní stránka',
    'Denní menu',
    'Minutky',
    'Pizza',
    'Uživatelé',
    'Objednávky',
    'Ekonomika',
    'Nastavení',
];

const Dashboard = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px' }}>
            <Navbar></Navbar>
            <div style={{ height: '100px' }}></div>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            {data.map((name, i) => {
                                return (
                                    <Button
                                        variant="contained"
                                        style={{ margin: '5px' }}
                                    >
                                        {name}
                                    </Button>
                                );
                            })}
                        </Grid>
                        <Grid item xs={10}></Grid>
                    </Grid>
                </Box>
            </Container>
        </Container>
    );
};

export default Dashboard;
