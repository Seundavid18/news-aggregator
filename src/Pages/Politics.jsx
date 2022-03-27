import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Politics() {
    const [news, setNews] = useState(null)

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=politics&apiKey=7c73df71242848cc913cbcf69f6b8e90")
          .then((response) => response.json())
          .then((news) => setNews(news.articles));
      }, [setNews]);

    return(
        <div>
            <Header />
            <Navbar />
            <div className="pt-4 pb-5">
                <div className="container">
                    <div className="flex gap-3 pb-3">
                        {news === null ? (
                            <div style={{display: 'flex', marginLeft: '550px',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                                <CircularProgress color="secondary" />
                            </div>
                        ) : (
                            news.map((feed, index) => {
                                return(
                                    <div key={index} className="flex-box pb-1">
                                        <h5 className="fs-4 fw-bold">{feed.title}</h5>
                                        <p className="fs-6 text-secondary">{feed.description}</p>
                                        <a href={feed.url} target="_blank">
                                            <p className="read-more">
                                                Read More
                                            </p>
                                        </a>   
                                            
                                        <p className="fs-6 text-secondary">{feed.publishedAt}</p>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Politics;