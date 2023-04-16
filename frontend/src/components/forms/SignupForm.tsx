import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";
import React from "react";
import PasswordField from "./Password";
import { Link } from "react-router-dom";
import LoaderTextField from "./LoaderTextField";

const SignupForm = () => {
    const passwordInput = (event: React.ChangeEvent)=>{
        const a =  1
    }
    return (
                    <Box component={"form"} sx={{
                        '& .MuiTextField-root': { m: 1 },
                        }} className="w-full" >
                        <Typography variant="h4" mb={1} component={"h1"}>
                            <strong>Sign Up </strong>
                        </Typography>
                        <LoaderTextField id_="username" 
                            label="username" 
                            styles={{}} 
                            error={false}
                            helperText={""}
                            showProgress={false}
                        />
                        <LoaderTextField id_="email" 
                            label="email" 
                            styles={{}} 
                            error={false}
                            helperText={""}
                            showProgress={false}
                        />
                        <PasswordField label="password" changeHandler={passwordInput}/>
                        <PasswordField label="confim password" changeHandler={passwordInput}/>
                        <div className="ms-2 text-[#6c757d]  text-sm sm:text-base">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="remember me" />
                            </FormGroup>
                        </div >
                        <Box component={"div"} className="w-full ml-2 mt-4">
                            <Button className="w-full" type="submit" size={"large"} variant="contained" >
                                Signup
                            </Button>
                        </Box>
                        <div className="flex py-4 ms-2 text-sm sm:text-base">
                            <span className="mr-1.5 text-[#6c757d]">already have an account?</span> <Link className="text-primary font-bold" to="/login">login</Link>
                        </div>
                    </Box> 
            );
}

export default SignupForm;
