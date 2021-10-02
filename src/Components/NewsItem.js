import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, sources } = this.props;
    return (
      <div>
        <div className="card text-center" style={{ width: "23rem", margin: "0px 0px 0px 20px" }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'

          }}>

            <span class="badge rounded-pill bg-success" >
              {sources}
            </span>
          </div>

          <img src={!imageUrl ? "https:images.wsj.net/im-403222/social" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm my-2 btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}
