import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import React from "react";
import PasswordField from "./Password";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const passwordInput = (event: React.ChangeEvent)=>{
        const a =  1
    }
return (
                <Box component={"form"} sx={{
                    '& .MuiTextField-root': { m: 1 },
                    }} className="w-full" >
                    <Typography variant="h4" mb={1} component={"h1"}>
                        <strong>Login </strong>
                    </Typography>
                    <TextField className="w-full"  label="Email Or Username" variant="outlined"/>
                    <PasswordField label="password" changeHandler={passwordInput}/>
                    <div className="flex justify-between items-center ms-2 text-[#6c757d]  text-sm sm:text-base">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="remember me" />
                        </FormGroup>
                        <Link to="/forgot-password" className="text-primary">
                            Forgot password?
                        </Link>
                    </div >
                    <Box component={"div"} className="w-full ml-2 mt-4">
                        <Button className="w-full" type="submit" size={"large"} variant="contained" >
                            Login
                        </Button>
                    </Box>
                    <div className="flex py-4 ms-2 text-sm sm:text-base">
                        <span className="mr-1.5 text-[#6c757d]">{"Don't"} have an account?</span> <Link className="text-primary font-bold" to="/signup">create an account</Link>
                    </div>
                </Box> 
        );
}

export default LoginForm;
