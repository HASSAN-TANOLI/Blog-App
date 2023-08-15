import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  formHelperTextClasses,
} from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const history = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setDiscription(localStorage.getItem("discription"));
    setSelectedImage(localStorage.getItem("selectedImage"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("id....", id);
    console.log("this image has been selected", selectedImage);
    axios
      .put(`https://64d53932b592423e469546b5.mockapi.io/Blog-App/${id}`, {
        title: title,
        discription: discription,
        selectedImage: selectedImage,
      })
      .then(() => {
        history("/");
      });
  };

  const handleFileChange = (event) => {
    setSelectedImage(event.target.value);
    console.log("this is selected state", setSelectedImage);
  };

  const handleSelectedImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
      console.log(imageURL);
    }
  };

  const handleBoth = (event) => {
    handleFileChange(event);
    handleSelectedImageChange(event);
  };

  return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        Update a blog post
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Enter Product Title"
                    label="Product Title"
                    variant="outlined"
                    fullWidth
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ zIndex: "99px" }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    type="file"
                    id="image-upload"
                    onChange={handleBoth}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="image-upload">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      fullWidth
                    >
                      Upload Image
                    </Button>
                  </label>
                </Grid>

                {selectedImage && (
                  <Grid item xs={12}>
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{ maxWidth: "100%", maxHeight: "300px" }}
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleUpdate}
                  >
                    update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Update;
