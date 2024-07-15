import React, { useState } from "react";
import img7 from "./images/background.png";
export default function Inspiration() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      src: URL.createObjectURL(file),
      alt: file.name,
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
   
    console.log("Images:", images);
    console.log("Description:", description);
    
    setImages([]);
    setDescription("");
  };
  return (
    <div
      className="inspo-background"
      style={{ backgroundImage: `url(${img7})` }}
    >
      <div className="heading">
        <h1>SHARE YOUR INSPIRATION</h1>
        <div className="overlay">
          <div className="image-uploader-container">
            <div className="image-uploader">
                <p className="image-uploader-heading">Add your Images </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <div className="image-column">
                {images.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} />
                ))}
              </div>
            </div>
            </div>
            </div>
            <div className="input-container">
              <label htmlFor="title">Title Here:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="description">Pen-down your Innovation here:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              />
                <button id="InsButton" onClick={handleSubmit} className="submit-button2">Submit</button>
            </div>
          
        </div>
      </div>
    
  );
}
