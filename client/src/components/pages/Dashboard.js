import React, { useState } from "react";
import { Container } from "@mui/system";
import Navbar from "../navbar/Navbar";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import DashBoardRoutes from "../dashboardPages/DashboardRoutes";

const Dashboard = () => {
    const [componentActive, setComponentActive] = useState();

    return (
        <Container style={{ margin: "0px", padding: "0px" }}>
            <Navbar></Navbar>
            <div style={{ height: "100px" }}></div>
            <Container>
                <Box>
                    {DashBoardRoutes.map((index, i) => {
                        return (
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Button
                                        variant="contained"
                                        style={{ margin: "5px" }}
                                        onClick={() =>
                                            setComponentActive(index.name)
                                        }
                                    >
                                        {index.name}
                                    </Button>
                                </Grid>
                                <Grid item xs={10}>
                                    {componentActive === index.name ? (
                                        <index.component />
                                    ) : (
                                        ""
                                    )}
                                </Grid>
                            </Grid>
                        );
                    })}
                </Box>
            </Container>
        </Container>
    );
};

export default Dashboard;
