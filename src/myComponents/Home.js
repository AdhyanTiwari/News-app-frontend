import React from 'react';
import News from './News';
import image from "../images/main1.png"

function Home() {
    return (
        <div className='container'>
            <img src={image}  style={{maxWidth:"100%"}}alt="" />
            <News category={"general"} />
        </div>
    )
}

export default Home