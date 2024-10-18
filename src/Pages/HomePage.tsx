import React from "react";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Bestseller from "../components/Bestseller";

const HomePage = () =>{
    return(
        <div>
            <Hero/>
            <Features/>
            <Bestseller/>
        </div>
    )
}

export default HomePage;