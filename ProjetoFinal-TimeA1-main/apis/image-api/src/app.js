// Load environment variables from .env file
require('dotenv').config()
const express = require("express");
const multer = require("multer");
const openai = require("./openai");
const app = express();
const upload = multer();

const { generateImg } = require("./img-service");

app.use(express.json());

const { PORT } = process.env;

app.post("/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "prompt is required" });

    const data = await generateImg(prompt);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

app.post("/image", upload.single("image"), async (req, res) => {
  try {
    // This is the Buffer object that contains your image data
    const buffer = req.file.buffer;
    // Set a `name` that ends with .png so that the API knows it's a PNG image
    buffer.name = "image.png";

    const { data } = await openai.createImageEdit(
      buffer,
      'cute, happy, anime',
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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
