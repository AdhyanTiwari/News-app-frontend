import React, { useContext, useEffect, useState } from 'react';
import newscontext from '../contexts/newscontext';
import Alert from './Alert';
import { Link } from 'react-router-dom';

function Saved() {
  const a = useContext(newscontext);

  useEffect(() => {
    a.getNews();
  }, [])
  const [alert, setalert] = useState(false)
  const onclick = (e, event) => {
    event.preventDefault();
    a.deleteNews(e);
    setalert(true);
    setTimeout(() => {
      setalert(false)
    }, 2050);
  }

  return (
    <>
      {alert ? <Alert msg={"Successfully Deleted!"} color={"danger"} /> : ""}
      <div className='container' style={{ marginTop: "1rem", height: "2rem" }}>
        <Link to={"/savedvideos"}> <button className='btn btn-outline-light btn-sm fixed-right'>Saved Videos</button></Link>
        <h1 className='text-center'>Saved News</h1>
        <div className="row my-4">
          {a.news.length === 0 ? <> <br /><h3 className="text-center">No Saved News, save your favourite news here</h3></> : ""}
          {a.news.slice(0).reverse().map(e => {
            return (
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
                    <a href={e.url} type="button" className="btn btn-dark btn-sm">
                      Read More
                    </a>
                    <a className='mx-3' href="#"><i className="fa-solid fa-trash" onClick={(event) => { onclick(e._id, event) }}></i></a>
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

export default Saved