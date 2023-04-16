
import { Theme } from "@emotion/react";
import { CircularProgress, InputAdornment, SxProps, TextField } from "@mui/material";
import React from "react";

interface Props{
  id_:string,
  label:string,
  styles:  SxProps<Theme> | undefined,
  error: boolean| undefined,
  helperText:  React.ReactNode,
  showProgress?:  boolean | undefined
}
const LoaderTextField:React.FC<Props> = ({id_, label, error,helperText,showProgress ,styles}) => {
  const progress = showProgress?   {
    endAdornment: (
      <InputAdornment position="end">
          <CircularProgress size={20} />
      </InputAdornment>
    ),
  } : {}

  return (
    <TextField
      sx={{width:"100%",...styles}}
      id={id_}
      variant="outlined"
      error={error}
      helperText={helperText}
      label={label}
      InputProps={progress}
    />
  );
}

export default LoaderTextField;
