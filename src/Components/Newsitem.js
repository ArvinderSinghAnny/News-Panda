import React, { Component } from "react";

export default class Newsitem extends Component {
   render() {
      let { title, description, imageUrl, newsurl } = this.props;
      return (
         <>
            <div className="card">
               <img
                  src={!imageUrl ? "https://images.wsj.net/im-489139/social" : imageUrl}
                  className="card-img-top"
                  alt="..."
               />
               <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a
                     href={newsurl}
                     target="_blank"
                     className="btn btn-primary btn btn-sm"
                  >
                     Read Now
                  </a>
               </div>
            </div>
         </>
      );
   }
}
