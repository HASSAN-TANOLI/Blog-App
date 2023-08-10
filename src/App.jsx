import React, { useState } from "react";
import {
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
  Tooltip,
  Menu,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeroImage from "./static/HeroImage.jpg";
import { MenuList } from "./data/data";
import Create from "./Create";

const heading1 = {
  fontSize: "60px",
  fontWeight: "700",
  color: "#000000",
};

const title = {
  fontSize: "20px",
  fontWeight: "700",
  flexGrow: "1",
};

const dots = {
  fontSize: "20px",
  fontWeight: "700",
};

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              ></CardMedia>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"div"}
                    gutterBottom
                    sx={title}
                  >
                    {menu.name}
                  </Typography>

                  <Tooltip title="click here to update and delete" arrow>
                    <MoreVertIcon onClick={handleMenuClick} />
                  </Tooltip>

                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem>Edit Post</MenuItem>
                    <MenuItem>Delete Post</MenuItem>
                  </Menu>
                </Box>

                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Create />
    </>
  );
};

export default App;
