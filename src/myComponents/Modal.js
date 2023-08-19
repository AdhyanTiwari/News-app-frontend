import React from 'react'

function Modal({ e }) {
  return (
    <>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              <div className=" scrollspy-example bg-body-tertiary p-3 rounded-2" data-bs-spy="scroll" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true"  tabindex="0">
                <img src={e.urlToImage
                  ? e.urlToImage
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{(e.title ? e.title : "Latest News")}</h5>
                  <p className="card-text">{(e.description ? e.description.substr(0, 100) + "..." : "Click on Read more to get to know more about this news and keep yourself updated with the current events")}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{e.publishedAt}</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal