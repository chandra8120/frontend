import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const Get = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3501/getalldata');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3501/delete/${userId}`);
      console.log(response.data);

      // After successful deletion, fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  return (
    <div style={{ background: '#2F539B', height: '100vh', width: '100%', overflowX: 'hidden' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Showing all the data</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: '400px',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
          width: '100%',
          background: '#2F539B',
        }}
      >
        {data.map((ele, ind) => (
          <Card
            key={ind}
            sx={{
              background: 'linear-gradient(to right, #2CE358, #7EF1F3)',
              width: '20%',
              height: '120px',
              display: 'flex',
              flexWrap: 'wrap',
              minWidth: '300px',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: 6,
              }}
            >
              <div> {ele.username} </div>
              <div> {ele.name}</div>
              <div> {ele.email} </div>
              <Box sx={{ display: 'flex', gap: 2 }}>
               
                <Button onClick={()=>navigate('/post')}>Home</Button>
                <Button onClick={() => deleteUser(ele._id)}>Remove</Button>
            
              </Box>
            </div>
          </Card>
        ))}
      </div>
      <button onClick={()=>navigate('/post')} style={{borderRadius:"5px",cursor:"pointer",position:"fixed",top:"10px",right:"10px",display:"flex",justifyContent:"center",alignItems:"center",background:"red"}}><KeyboardReturnIcon  sx={{color:"white"}}/></button>
    </div>
  );
};

export default Get;
