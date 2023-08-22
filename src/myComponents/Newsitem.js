import React, { useState, useEffect, useContext} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import newscontext from '../contexts/newscontext';
import Loading from './Loading';
import Alert from './Alert';

function Newsitem({ category }) {
    const a = useContext(newscontext);
    const [state, setstate] = useState({
        article: [],
        page: 1,
        loading: false,
    })

    const fetchData = async () => {
        setstate({ loading: true, article: state.article });
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_URL}&pageSize=9&page=${state.page}&category=${category}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setstate({ article: state.article.concat(parsedData.articles), page: state.page + 1, loading: false });
    }
    const [alert, setalert] = useState(false)
    const onclick = (e, event) => {
        event.preventDefault()
        a.addNews(e);
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 1000);
    }
    useEffect(() => {
        fetchData();
    }, [category])
    const [article, setarticle] = useState({
        content: "",
        title: "",
        urlToImage: "",
        url: "",
    })

    const modal = (event, e) => {
        event.preventDefault();
        setarticle(e);
    }
    return (
        <>
        
            {alert ? <Alert msg={"Successfully Added!"} color={"success"} /> : ""}
            <InfiniteScroll
                dataLength={state.article.length}
                next={fetchData}
                hasMore={state.article.length !== state.totalarticles}
                loader={<Loading state={state.loading} />}
            >
                <div className='container'>
                    <div className="row my-4">
                        {state.article.map(e => {
                            if (e.title === "" && e.description === "" && e.urlToImage === "") {
                                return (<></>)
                            }
                            else {
                                return (
                                    <>
                                        <div className="col-md-4" >
                                            <span className="badge text-bg-success">
                                                {e.source.name}
                                            </span>
                                            <div className="card mb-3">
                                                <img src={e.urlToImage
                                                    ? e.urlToImage
                                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{(e.title ? e.title.substr(0, 100) + "..." : "Latest News")}</h5>
                                                    <p className="card-text">{(e.description ? e.description.substr(0, 100) + "..." : "Click on Read more to get to know more about this news and keep yourself updated with the current events")}</p>
                                                    <p className="card-text">
                                                        <small className="text-body-secondary">{e.publishedAt}</small>
                                                    </p>
                                                    <a href={e.url} type="button" className="btn btn-dark btn-sm mx-1">
                                                        visit website
                                                    </a>
                                                    <a className='mx-2' href="#"><i class="fa-solid fa-bookmark" onClick={(event) => { onclick(e, event) }}></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }

                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>

    )
}

export default Newsitem