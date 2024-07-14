import React from 'react'
import '../Styles/Working.css'
import introImage from '../Sources/introImage.gif'
import timeline from '../Sources/timeline2.png'
import About from './About'
import {Link} from 'react-router-dom'
export const Working = () => {

    return (
        <div>
            <div className='working'>
                <h1 className='titleHeader'>Unveiling Our CNN Engine</h1>
                <div className='intro'>
                    <img src={introImage} alt='CNN-Image'></img>
                    <p>Harnessing cutting-edge AI, our model accurately analyzes chest X-rays, providing essential insights for critical medical decisions.</p>
                </div>
                <div className='steps'>
                    <div className='stepExplain'>
                        <div className='input'>
                            <h1>Input</h1>
                            <p>Provide a chest X-ray image for analysis.</p>
                        </div>
                        <div className='preprocess'>
                            <h1>Preprocess</h1>
                            <p>Optimizing the readiness of the image.</p>
                        </div>
                        <div className='features'>
                            <h1>Extract</h1>
                            <p>Revealing the key patterns from features.</p>
                        </div>
                        <div className='classification'>
                            <h1>Classify</h1>
                            <p>Deciphering diagnostic insights.</p>
                        </div>
                    </div>
                    <img className='timeline' src={timeline} alt='timeline' ></img>
                </div>
                <Link to="/Predict"><button className='start'>Start Diagnose</button></Link>
            </div>
            <About/>
        </div >
    )
}

export default Working