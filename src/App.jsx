import React from "react";
import {
  Box,
  Typography,
  Layout,
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import HeroImage from "./static/HeroImage.jpg";
import { MenuList } from "./data/data";
const heading1 = {
  fontSize: "80px",
  fontWeight: "700",
  color: "#000000",
};
const App = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          boxSizing: "boder-box",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography
              variant={"h6"}
              color="tomato"
              align="center"
              padding={10}
              sx={heading1}
            >
              Hassan's Blog
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component={"div"} gutterBottom>
                  {menu.name}
                </Typography>

                <Typography variant="body2">{menu.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default App;
