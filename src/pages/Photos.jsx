// https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/tree/main/projects/random-photos
import { useState } from 'react';
import "./Photos.css"

export const Photos = () => {
  const [image, setImage] = useState('https://picsum.photos/300');

  const loadImage = () => {
    setImage(`https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`);
  };

  return (
    <>
      <div className="image-container">
        <img src={image} alt="Random image" />
      </div>
      <button className="btn" onClick={loadImage}>Click 📸 Me</button>    
    </>
  );
};