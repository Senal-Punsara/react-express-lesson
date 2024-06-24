import { Container, Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { React, useState, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import "./HomePage.css";

function HomePage() {

  const [myVal, setMyVal] = useState(0);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "beige",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          mt: "8px",
          mb: "8px",
        }}
      >
        <Box sx={{ width: "50vh", height: "50vh", bgcolor: "lightgreen" }}>
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            useState
          </Typography>
          <Button
            onClick={() => {
              setMyVal(myVal + 1);
            }}
            variant="outlined"
            sx={{ mt: 1, ml: 2 }}
          >
            click me 1
          </Button>

          <Typography sx={{ ml: 5 }}>{myVal}</Typography>
          {/* <Typography sx={{ ml: 5 }}>{val}</Typography> */}
        </Box>
        <Box sx={{ width: "50vh", height: "80vh", bgcolor: "blue", overflowY:"scroll" }}>
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" , position:"fixed"}}
          >
            useEffect
          </Typography>

          {data && data.map((item)=>{
            return <p key={item.id}> {item.title}</p>
          })}

        </Box>
        {/* <Box sx={{ width: "50vh", height: "50vh", bgcolor: "black" }}></Box> */}
      </Container>

      <Footer />
    </>
  );
}

export default HomePage;
