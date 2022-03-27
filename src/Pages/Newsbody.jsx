import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CircularProgress } from "@material-ui/core";

function Newsbody() {
    const { newsbodyid } = useParams()

    const [news, setNews] = useState(null)

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c73df71242848cc913cbcf69f6b8e90/${newsbodyid}`)
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7c73df71242848cc913cbcf69f6b8e90/${newsbodyid}`)
          .then((response) => response.json())
          .then((news) => setNews(news.articles));
    }, [setNews])

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    return(
        <div>
            <Header />
            <Navbar />
            <div className="pt-4 pb-5">
                <div className="container">
                    <Link to='/'>
                        <AiOutlineArrowLeft size={30} className="icon" />
                    </Link>
                    {news == null ? (
                        <div style={{display: 'flex', marginLeft: '5%',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
                            <CircularProgress color="secondary" />
                        </div>
                    ) : (
                        <div>
                            <h1 className="fs-4 fw-bold">{news.title}</h1>
                            <h1 className="fs-6 text-secondary">{news.content}</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Newsbody;