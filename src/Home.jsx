import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Footer from "./Components/Footer";

function Home() {
    return(
        <div>
            <Header />
            <Navbar />
            <News />
            <Footer />
        </div>
    )
}

export default Home;