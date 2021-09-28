import React, { Component } from 'react'

export default class NewsItem extends Component {      

    render() {
      let {title,description,imageUrl,newsUrl} =this.props;
        return (
    <div>
<div className="card" style={{width: "25rem",margin:"0px 0px 0px 20px"}}>
<img src= {!imageUrl?"https:images.wsj.net/im-403222/social":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm my-2 btn-dark">Go somewhere</a>
  </div> 
</div>

            </div>
        )
    }
}
