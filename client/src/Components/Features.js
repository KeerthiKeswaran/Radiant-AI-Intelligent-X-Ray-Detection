import React from 'react';
import '../Styles/Features.css';
import pneumoniaImg from '../Sources/Pneumonia.jpeg';
import normalImg from '../Sources/Normal.jpeg';
import covidImg from '../Sources/Covid.jpeg';

const Features = () => {
    return (
        <div className='categories'>
            <h1 className='header'>Diagnosis Categories</h1>
            <div className='class-container'>
                <div className='class-card'>
                    <img src={pneumoniaImg} alt='Chest X-ray indicating Viral Pneumonia' className='class-image' />
                    <h2>Viral Pneumonia</h2>
                    <p>Our AI accurately identifies patterns indicative of Viral Pneumonia in chest X-rays, assisting medical professionals in timely diagnosis and treatment planning.</p>
                </div>
                <div className='class-card'>
                    <img src={normalImg} alt='Chest X-ray indicating Normal' className='class-image' />
                    <h2>Normal Class</h2>
                    <p>Discover peace of mind with our AI's ability to confirm normal findings in chest X-rays, ensuring clarity and reassurance in medical assessments.</p>
                </div>
                <div className='class-card'>
                    <img src={covidImg} alt='Chest X-ray indicating Covid' className='class-image' />
                    <h2>Covid-19</h2>
                    <p>Harnessing advanced algorithms, our AI detects characteristic signs of Covid-19 in chest X-rays, supporting rapid and effective management of this critical condition.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
