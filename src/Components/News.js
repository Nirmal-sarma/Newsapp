

import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitaliseWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }




    const updateNews = async () => {
        props.setProgress(0);
        //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
        //     &apikey=694edd537efd4fcaa402bf9b0e41d81b
        //    &page=${this.state.page}&pageSize=${props.pageSize}`;

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a65d7b7772c84fceb65e82f21b925394&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        props.setProgress(10);
        setLoading(true);

        let parseData = await data.json();
        props.setProgress(30);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults);
        setLoading(false);

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {

        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a65d7b7772c84fceb65e82f21b925394&page=${page+1}&pageSize=${props.pageSize}`;

        setPage(page + 1)
        let data = await fetch(url);

        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
    }

    // const handleNextclick = async (props) => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    // const handlePrevclick = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }



    return (
        <div container="container mx-2">
            <h2 className="text-center" style={{ margin: '80px 0px 40px 0px' }}>NewsApp-Top {!props.category === 'general' ? "" : capitaliseWord(props.category)} Headlines  </h2>
            {loading && <Spinner />}
            <InfiniteScroll


                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">


                    <div className="row text-center">
                        {articles.map((element) => {
                            return <div className="col-md-4 col-sm-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} date={element.publishedAt} author={element.author} sources={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between text-center">
               {!this.state.loading && <button disabled={this.state.page <=1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevclick}>&larr; prev</button>}

                 
                  {!this.state.loading && <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={this.handleNextclick}>next &rarr;</button>}
                   
                </div>  */}



        </div>
    )

}

News.defaultProptype = {
    country: 'in',
    pageSize: 5,
    totalResults: 0
}

News.Proptype = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

}

export default News