import { Box, Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const Post= () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    api();
  }, []); 

  const api = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data1 = await response.json();
      setData(data1);
    } catch (error) {
      console.log(error, "display error message");
    }
  };
  const submit = async (userId) => {
    try {
      const user = data.find((user) => user.id === userId);
  
      if (user) {
        console.log('User data to be sent:', user);
        const response = await axios.post("http://localhost:3501/data", user);
        console.log(response.data);
      } else {
        console.error('User not found.');
      }
    } catch (error) {
      alert("Already user submitted data",error)
      console.error('Error submitting data:', error);
    }
  };
  
  
  return (
    <div style={{background:"#2F539B",height:"100vh",width:"100%",overflowX:"hidden"}}>
      <h2 style={{color:"white",textAlign:"center"}}>Post the data</h2>

       <div style={{display: "flex", flexWrap: "wrap", minWidth: "400px", gap: 10, justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: 'center', width:"100%", background:"#2F539B"}}>
  
      {data.map((ele,ind) => (
      
        <Card key={ind}
          sx={{
            
            background: "linear-gradient(to right, #71E7B7, #E3CB53)",
            width: "20%",
            height: "120px",
            display: "flex",
            flexWrap: "wrap",
            minWidth: "300px",
            borderRadius: "10px",
            margin: "10px",
          }}
          
        >
          <div
            style={{
             
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 6
            }}
          >
            <div> {ele.username} </div>
            <div> {ele.name}</div>
            <div> {ele.email} </div>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button onClick={() => submit(ele.id)}>Post</Button>
              <Button onClick={()=>navigate("/get")}>Get</Button>
            </Box>
          </div>
        </Card>
     
      ))}
      </div>
      <button onClick={()=>navigate('/')} style={{borderRadius:"5px",cursor:"pointer",position:"fixed",top:"10px",right:"24px",display:"flex",justifyContent:"center",alignItems:"center",background:"red"}}><KeyboardReturnIcon  sx={{color:"white"}}/></button>
   
    </div>
  );
};

export default Post