import React, { useContext, useEffect, useState } from 'react';
import newscontext from '../contexts/newscontext';
import userEvent from '@testing-library/user-event';
import Alert from './Alert';
import { Link } from 'react-router-dom';

function Saved_Videos() {
    const a = useContext(newscontext);
    useEffect(() => {
        a.getVideos();
    }, [])
    const [alert, setalert] = useState(false)

    const onclick = (e, event) => {
        event.preventDefault();
        a.deleteVideos(e);
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 2050);
    }
    return (
        <>
            {alert ? <Alert msg={"Successfully Deleted!"} color={"danger"} /> : ""}
            <div className='container' style={{ marginTop: "1rem", height: "2rem" }}>
                <Link to={"/saved"}> <button className='btn btn-outline-light btn-sm fixed-right'>Saved News</button></Link>
                <h1 className='text-center'>Saved News Videos</h1>
                <div className="row my-4">
                    {a.video.length === 0 ? <> <br /><h3 className="text-center">No Saved News, save your favourite news here</h3></> : ""}
                    {a.video.slice(0).reverse().map(e => {
                        return (
                            <div className="col-md-4" >
                                <div className="card mb-3">
                                    <div className="ratio ratio-16x9  ">
                                        <iframe src={`https://www.youtube.com/embed/${e.videoId}?rel=0`} title={e.title} allowfullscreen></iframe>
                                    </div>
                                    <div className="card-body">
                                        <h6>{e.title}</h6>
                                        <a className='mx-2' href="#"><i className="fa-solid fa-trash" onClick={(event) => { onclick(e._id ,event) }}></i></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Saved_Videos