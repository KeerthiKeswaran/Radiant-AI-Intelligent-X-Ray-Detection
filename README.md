# Probe2Cure: Intelligent X-Ray Detection System.

**Website Link :** https://radiantai.vercel.app/ 

## Introduction

**Probe2Cure** is an innovative web application designed to classify chest X-ray images into three categories: COVID-19, Normal, and Viral Pneumonia. Leveraging the power of Convolutional Neural Networks (CNNs), this application provides medical professionals and users with instant and accurate diagnostics, thereby assisting in timely medical decision-making.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Features](#features)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Model Information](#model-information)
7. [Upcoming Version Updates](#upcoming-version-updates)

## Overview

Probe2Cure is structured into a user-friendly interface where users can upload chest X-ray images and receive a diagnosis. The website is built using React for the frontend and FastAPI for the backend, with the core model being a TensorFlow-based CNN.

## Architecture

### Frontend

- **Framework:** React
- **Routing:** React Router
- **Components:**
  - `App.js`: Main entry point for routing.
  - `Home.js`: Homepage with navigation and introductory content.
  - `Predict.js`: Prediction page for image uploads and results display.
  - `Features.js`: Information on the categories.
  - `Working.js`: Details on how the model works.
  - `ScrollToTop.js`: Ensures smooth scrolling to top on route change.

### Backend

- **Framework:** FastAPI
- **Endpoints:**
  - `/predict`: Endpoint for uploading images and receiving predictions.
- **Model Loading:** TensorFlow/Keras model loaded once at startup.
- **Middleware:** CORS middleware to handle cross-origin requests.

## Features

1. **Home Page:**
   - Introduction to Probe2Cure.
   - Video background and smooth navigation.
   - Sections for categories, working, and about us.

2. **Prediction Page:**
   - Drag-and-drop interface for image upload.
   - Immediate prediction of respiratory conditions.
   - Display of diagnostic result and therapeutic regimen.

3. **Information Sections:**
   - Detailed explanation of each diagnosis category (COVID-19, Normal, Viral Pneumonia).
   - Step-by-step illustration of the CNN engine's working process.

4. **Responsive Design:**
   - Media queries for optimal viewing on different devices (upcoming version).

## Usage

### Setting Up the Environment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KeerthiKeswaran/Radiant-AI.git
   cd Radiant-AI
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Run the Backend Server:**
   ```bash
   uvicorn main:app --reload
   ```

### Using the Application

1. **Home Page:**
   - Navigate through the sections to learn about the features and workings of Radiant-AI.
   - Click on "Get Started" to move to the prediction page.

2. **Prediction Page:**
   - Drag and drop a chest X-ray image or click to upload.
   - Wait for the diagnosis result to appear.
   - Review the therapeutic regimen provided based on the diagnosis.

## API Endpoints

### /predict

- **Method:** POST
- **Description:** Accepts an image file and returns the predicted diagnosis.
- **Request Parameters:**
  - `file`: (required) Image file of the chest X-ray.
- **Response:**
  - `predicted_label`: Predicted diagnosis category (COVID-19, Normal, Viral Pneumonia).
  - **Example Response:**
    ```json
    {
      "predicted_label": "Covid"
    }
    ```

## Model Information

- **Model Name:** ProbingModel-xs
- **Version:** 1.0
- **Architecture:** Convolutional Neural Network (CNN)
- **Classes:** COVID-19, Normal, Viral Pneumonia
- **Input Size:** 150x150 pixels

## Upcoming Version Updates

1. **Media Queries:**
   - Implemented to ensure responsive design across all device types, enhancing user experience on mobile and tablet devices.

2. **Improved Model Parameters:**
   - Optimized model parameters for better accuracy and faster inference times.

3. **Additional Features:**
   - Enhanced UI/UX elements for a more engaging user interaction.
   - Extended therapeutic regimen suggestions based on latest medical guidelines.

## Conclusion

Probe2Cure is committed to providing cutting-edge AI solutions for medical diagnostics. Our platform not only offers high accuracy in detecting critical conditions but also aims to support medical professionals with reliable and timely insights. We continue to evolve and improve our technology to better serve the healthcare community.

---

This documentation provides a comprehensive overview of your project, highlighting its features, architecture, usage, and upcoming improvements. Feel free to modify it as needed to better fit your project's specifics and your audience.
