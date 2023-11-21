import React, {useState } from "react";
import "./login.css";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  

  const signIn = async () => {
    try {
      const response = await axios.post('http://localhost:3501/login', { username, password });
      console.log(response.data);
  
      if (true) {
        setData({ username: "", password: "" });
        navigate('/post');
      } else {
       alert('Successful login')
      }
    } catch (error) {
      console.error(error.response.data);
    alert('invalid username password')
    }
  };
  

  


  return (
    <div className="main1">
      <div className="first-image">
        <div>
          {/* <img style={{ width: "102%", height: "100%" }} src={Logo} alt="img" /> */}
        </div>
      </div>

      <div className="second-image">
        <div className="form-in">
          <div style={{ fontStyle: "initial", fontSize: "25px" }}>
            Welcome to Login
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "70%",
            }}
          >
            <div>
              <TextField
                value={username}
                name="username"
                onChange={change}
                label="username "
                type="username"
                id="outlined-password-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="password"
                  value={password}
                  name="password"
                  onChange={change}
                />
              </FormControl>
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "70%", cursor: "pointer" }}>
                Dont have an account ?
              </p>
              <Button
                onClick={() => navigate("/signup")}
                sx={{ fontSize: "10px", textTransform: "none" }}
              >
                SignUp
              </Button>
            </div>
          </div>
          <Button
            onClick={signIn}
            sx={{
              background: "linear-gradient(to left,#051788 ,#7C8CF1 )",
              color: "white",
              textTransform: "none",
              fontWeight: "43px",
              fontFamily: "unset",
              width: "70%",
            }}
          >
            Login
          </Button>

          <div style={{ display: "flex", gap: 30, cursor: "pointer" }}>
            <FcGoogle style={{ fontSize: "25px" }} />
            <FacebookIcon sx={{ color: "blue" }} />
            <AppleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
