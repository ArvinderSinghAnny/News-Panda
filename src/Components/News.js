import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export default class News extends Component {
   static defaultProps = {
      country: "in",
      category: "general",
   };
   static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
   };
   constructor() {
      super();
      console.log("This is the contructor");
      this.state = {
         article: [],
         loading: false,
         page: 1,
      };
   }
   async componentDidMount() {
      console.log("cdm");

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b787a6a8d45f45beb40f8676351e9c22&pageSize=${this.props.pagesize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         article: parsedData.articles,
         totalResults: parsedData.totalResults,
      });
   }
   handleOnprevious = async () => {
      console.log("this is previous");
      let url = `https://newsapi.org/v2/top-headlines?country=${
         this.props.country
      }&category=${this.props.category}&apiKey=b787a6a8d45f45beb40f8676351e9c22&page=${
         this.state.page - 1
      }&pageSize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
         page: this.state.page - 1,
         article: parsedData.articles,
      });
   };
   handleOnnext = async () => {
      console.log("Next");
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
      } else {
         let url = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
         }&category=${this.props.category}&apiKey=b787a6a8d45f45beb40f8676351e9c22&page=${
            this.state.page + 1
         }&pageSize=${this.props.pagesize}`;
         let data = await fetch(url);
         let parsedData = await data.json();
         console.log(parsedData);
         this.setState({
            page: this.state.page + 1,
            article: parsedData.articles,
         });
      }
   };

   render() {
      console.log("this is render");
      return (
         <>
            <h2 className="text-center my-3">Top-News-Headlines</h2>

            <div className="container my-4">
               <div className="row">
                  {this.state.article.map((element) => {
                     return (
                        <div className="col-md-4 " key={element.url}>
                           <Newsitem
                              title={element.title}
                              description={element.description}
                              imageUrl={element.urlToImage}
                              newsurl={element.url}
                           />
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className=" container d-flex justify-content-between">
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleOnprevious}
                  disabled={this.state.page <= 1}
               >
                  &larr; Previous
               </button>
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleOnnext}
               >
                  Next &rarr;
               </button>
            </div>
         </>
      );
   }
}
