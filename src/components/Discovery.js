import React, { useState } from "react";
import img7 from "./images/background.png";

export default function DiscoverYourLook() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      src: URL.createObjectURL(file),
      alt: file.name,
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = () => {
    // Perform submission logic here, e.g., sending data to backend or processing
    console.log("Images:", images);
    console.log("Description:", description);
    // Clear form after submission
    setImages([]);
    setDescription("");
  };

  return (
    <div className="discover-look">
      <div className="discover-background" style={{ backgroundImage: `url(${img7})` }}>
        <div className="heading2">
          <h1>DISCOVER YOUR LOOK</h1>
          <div className="overlay2">
            <div className="image-uploader-container2">
              <div className="image-uploader2">
                <p className="image-uploader-heading2">Add your Images</p>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
                <div className="image-column2">
                  {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className="input-container2">
              <label htmlFor="description">Describe your look:</label>
              <textarea
                id="description2"
                value={description}
                onChange={handleDescriptionChange}
                className="description-textarea2"
              />
              <button id="DisButton" onClick={handleSubmit} className="submit-button2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}