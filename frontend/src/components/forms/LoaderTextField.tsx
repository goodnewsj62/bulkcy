
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

interface Props{

}
const LoaderTextField:React.FC<Props> = (props) => {
  return (
    <TextField 
      inputProps={{
        endAdornment:(
          <InputAdornment position="end">
            
          </InputAdornment>
        )
      }}
    />
  );
}

export default LoaderTextField;
