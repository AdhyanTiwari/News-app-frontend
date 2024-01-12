import React, { useEffect } from 'react';
import Newsitem from './Newsitem';


function News(props) {
    useEffect(() => {

    }, [props.category])

    return (
        <div className='container' style={{ marginTop: "1rem", height: "2rem" }}>
            <h1 className='text-center'>Newsify Latest {props.category} Headline</h1>

            <Newsitem category={props.category} />
        </div>
    )
}



export default News

