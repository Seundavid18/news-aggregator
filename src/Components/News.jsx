import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { CircularProgress } from "@material-ui/core";

function News() {
    const [news, setNews] = useState(null)
    const [apiErr, setApiErr] = useState(null);

  const handleErrors = (response) => {
    if (!response.ok) {
      setApiErr(response.status);
      throw Error(response.status);
    }
    return response;
  };

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
                'X-RapidAPI-Key': '7a7e67e596mshe0fd1a4ab45fe8ap19c493jsnb3d43e214ded'
            }
        };
        
        fetch('https://free-news.p.rapidapi.com/v1/search?q=Headline&lang=en', options)
            .then(handleErrors)
            .then((response) => response.json())
            .then((news) => setNews(news.articles));
      }, [setNews]);

    return(
        <div className="pt-4 pb-5">
            <div className="container">
                <div className="flex gap-3 pb-3">
                    {apiErr != null ? (
                        <div>you encountered error {apiErr}</div>
                    ) : 
                    news === null ? (
                        <div className="row mx-auto justify-content-center align-items-center flex-column">
                            <div className="col-6">
                                <CircularProgress color="secondary" />
                            </div>
                        </div>
                    ): (
                        news.map((feed, index) => {
                            return(
                                <div key={index} className="flex-box pb-1">
                                    <h5 className="fs-4 fw-bold">{feed.title}</h5>
                                    <p className="fs-6 text-secondary">{feed.summary}</p>
                                    <a href={feed.link} target="_blank">
                                        <p className="read-more">
                                            Read More
                                        </p>
                                    </a>  
                                    <p className="fs-6 text-secondary">{feed.published_date}</p>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default News;