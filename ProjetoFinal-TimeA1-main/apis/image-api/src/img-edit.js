// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const multer = require("multer");
const openai = require("./openai");
const app = express();
const upload = multer();

const parser = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "prompt", maxCount: 1 },
  { name: "imagemask", maxCount: 1 },
]);

// Define a route to handle the image upload
app.post("/image", parser, async (req, res) => {
  try {
    // This is the Buffer object that contains your image data

    const imgBuffer = req.files.image[0].buffer;
    const maskBuffer = req.files.imagemask[0].buffer;

    imgBuffer.name = "image.png";
    maskBuffer.name = "image.png";

    const { prompt } = req.body;

    const { data } = await openai.createImageEdit(
      imgBuffer,
      prompt,
      maskBuffer, // mask
      1, // num of variations
      "1024x1024" // size
    );

    // Send the variations back in the response
    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "An error occurred" });
  }
});

// Start the server
app.listen(3030, () => {
  console.log("Server listening on port 3030");
});
