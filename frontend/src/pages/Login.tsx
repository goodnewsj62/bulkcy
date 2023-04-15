

import { Box, Grid } from "@mui/material";
import React from "react";
import AuthDesign from "components/designs/AuthDesign";
import LoginForm from "components/auth/LoginForm";


const Login = () => {
    return (
        <Box component={"div"}>
            <Grid container spacing={0} >
                <Grid item sm={6} xs={0}>
                    <AuthDesign />
                </Grid>
                <Grid item xs={12} sm={6} className="w-full h-screen flex !flex-col py-20 px-6 justify-center items-center lg:!px-20">
                    <LoginForm />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
