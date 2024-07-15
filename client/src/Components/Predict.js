import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import '../Styles/Predict.css';
import PredictBg from '../Sources/PredictBG.mp4';
import { Link } from 'react-router-dom';

const Predict = () => {


  const currentYear = new Date().getFullYear();
  const [image, setImage] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const regimens = [
    "Stay hydrated with herbal teas like honey and lemon. Use steam inhalation with eucalyptus or peppermint for congestion. Rest well and eat a balanced diet with immune-boosting foods like garlic, ginger, and turmeric.",
    "Hydrate with herbal teas and honey. Use steam inhalation with eucalyptus or peppermint oils. Rest well and include immune-supportive foods like garlic and ginger.",
    "I'm happy to report that the findings are normal. There are no signs of any abnormalities or issues in the images examined. This is a reassuring indication of your current health status in the areas evaluated. Please continue to take good care of yourself."
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
    uploadImage(file); // Upload image immediately on drop
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    uploadImage(file); // Upload image immediately on change
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://radiantserver.onrender.com/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResponseText(response.data.predicted_label);
      setShowResponse(true); // Show the responseBox
    } catch (error) {
      console.error('Error uploading image:', error);
      setResponseText('Error uploading image');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    setShowResponse(false); // Hide responseBox on image change
  }, [image]);

  return (
    <div>
      <video autoPlay muted loop className='predBG'>
        <source src={PredictBg} type="video/mp4" />
      </video>
      <h1 className='predHeader'>Discover Instant Detection for <br />X-ray Images</h1>
      <div className='dragBox' {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />

      <div className='prediction'>
        {image && (
          <div className='xrayBox'>
            <h3>Prediction X-Ray</h3>
            <img src={image} alt="Selected" style={{ width: '150px', height: '150px', borderRadius: '15px', opacity: '0.8' }} />
            <h3 className='loading' style={{ display: !showResponse ? "block" : "none" }}>Diagnosing...</h3>
          </div>
        )}

        {showResponse && (
          <div className={`responseBox fade-in`}>
            <h3>Diagnosis Result</h3>
            <p>Respiratory Condition : {responseText}</p>
            <p className='regimen'>Therapeutic Regimen: {responseText === 'Covid' ? regimens[0] : responseText === 'Normal' ? regimens[2] : regimens[1]}</p>
          </div>
        )}
      </div>

      <div className='about'>
        <p id="copyright">©{currentYear} Radiant-AI.</p>
        <Link to="/" offset={-100} className='homeLink'><p>Go To Home</p></Link>
        <a href='https://github.com/KeerthiKeswaran' target="_blank" rel="noreferrer">Model Details</a>
      </div>
    </div>
  );
};

export default Predict;
