import React, { useState, useEffect } from "react";
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

import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeroImage from "./static/HeroImage.jpg";
import { MenuList } from "./data/data";
import Create from "./Create";
import axios from "axios";
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

const Home = () => {
  const [anchorEl, setAnchorEl] = useState({});
  const [data, setData] = useState([]);

  const handleMenuClick = (event, index) => {
    setAnchorEl((prevAnchorEl) => ({
      ...prevAnchorEl,
      [index]: event.currentTarget,
    }));
  };

  const handleMenuClose = (index) => {
    setAnchorEl((prevAnchorEl) => ({
      ...prevAnchorEl,
      [index]: null,
    }));
  };

  function getData() {
    axios
      .get("https://64d53932b592423e469546b5.mockapi.io/Blog-App")
      .then((res) => {
        const data = res.data;
        setData(data);
      });
  }

  function handleDelete(id) {
    console.log("Deleting post with ID:", id); // Add this line for debugging
    axios
      .delete(`https://64d53932b592423e469546b5.mockapi.io/Blog-App/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, title, discription, selectedImage) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("discription", discription);
    localStorage.setItem("selectedImage", selectedImage);
  };

  useEffect(() => {
    getData();
  }, []);

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

      <Box sx={{ textAlign: "center", mt: "40px", mb: "40px" }}>
        <Link to="/create">
          <Button
            variant="contained"
            sx={{
              fontSize: "18px",
              padding: "10px 40px",
              borderRadius: "10px",
            }}
          >
            {" "}
            Create a blog post{" "}
          </Button>
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((eachdata, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "390px",
              display: "flex",
              m: 2,
              flexBasis: "calc(33.33% - 16px)",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={eachdata.selectedImage}
                alt="an image"
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
                    {eachdata.title}
                  </Typography>

                  <Tooltip title="click here to update and delete" arrow>
                    <MoreVertIcon
                      onClick={(event) => handleMenuClick(event, index)}
                    />
                  </Tooltip>

                  <Menu
                    anchorEl={anchorEl[index]}
                    keepMounted
                    open={Boolean(anchorEl[index])}
                    onClose={() => handleMenuClose(index)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Link to={`/update?id=${eachdata.id}`}>
                      <MenuItem
                        onClick={() =>
                          setToLocalStorage(
                            eachdata.id,
                            eachdata.title,
                            eachdata.discription,
                            eachdata.selectedImage
                          )
                        }
                      >
                        Edit Post
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={() => handleDelete(eachdata.id)}>
                      Delete Post
                    </MenuItem>
                  </Menu>
                </Box>

                <Typography variant="body2">{eachdata.discription}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Home;
