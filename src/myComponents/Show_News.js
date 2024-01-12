import React from 'react'

function Show_News({ e }) {
    return (
        <div className="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true" id="exampleModal" >
            <div className="modal-content">
                <div className='container' style={{width:"5rem"}}>
                    <img src={e.urlToImage
                        ? e.urlToImage
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"} className="card-img-top" alt="..." />
                </div>
                <div style={{ color: "black" }}>
                    <h5 className="card-title">{(e.title ? e.title : "Latest News")}</h5>
                    <p className="card-text">{(e.description ? e.description : "Click on Read more to get to know more about this news and keep yourself updated with the current events")}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{e.publishedAt}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Show_News