// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const multer = require("multer");
const openai = require("./openai");
const app = express();
const upload = multer();

// Define a route to handle the image upload
app.post("/image", upload.single("image"), async (req, res) => {
  try {
    // This is the Buffer object that contains your image data
    const buffer = req.file.buffer;
    // Set a `name` that ends with .png so that the API knows it's a PNG image
    buffer.name = "image.png";

    const { data } = await openai.createImageVariation(
      buffer,
      3,
      "1024x1024"
    );

    // Send the variations back in the response
    res.json(data);
  } catch (error) {
    console.error("Error:", error.message);

    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
