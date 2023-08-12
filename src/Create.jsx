import React from "react";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const Create = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including the uploaded image file.
  };

  return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        Add a New Blog
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  ''
                  <TextField
                    placeholder="Enter Product Title"
                    label="Product Title"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <input
                    accept="image/*"
                    type="file"
                    id="image-upload"
                    onChange={handleFileChange}
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
                  >
                    Submit
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

export default Create;
