import React, { useEffect, useState, useContext } from 'react';
import newscontext from '../contexts/newscontext';
import Alert from './Alert';


const YoutubeFeed = (props) => {
    const a = useContext(newscontext)
    const API_KEY = process.env.REACT_APP_VIDEOS;
    const CHANNEL_ID = props.channelId;
    const MAX_RESULTS = 9; // Number of videos to fetch

    const [videos, setVideos] = useState([]);
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=${MAX_RESULTS}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(url);
                const parsedData = await data.json();
                console.log(parsedData)

                setVideos(parsedData.items);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };

        fetchData();
    }, []);

    const onclick = (videoId, title, e) => {
        e.preventDefault()
        const data = {
            videoId: videoId,
            title: title
        }
        a.addVideos(data);
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 1000);
       
    }
    const [alert, setalert] = useState(false)
    return (
        <div>
             {alert ? <Alert msg={"Successfully Saved!"} color={"success"} /> : ""}
            <h1>{props.channel} </h1>
            <div className='container'>
                <div className="row my-4">
                    {videos.map((video) => (
                        <>
                            <div className="col-md-4" >
                                <div className="card mb-3">
                                    <div className="ratio ratio-16x9  ">
                                        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0`} title={video.snippet.title} allowfullscreen></iframe>
                                    </div>
                                    <div className="card-body">
                                        <h6>{video.snippet.title}</h6>
                                        <a className='mx-2' href="#"><i className="fa-solid fa-bookmark" onClick={(e) => { onclick(video.id.videoId, video.snippet.title, e) }}></i></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YoutubeFeed;