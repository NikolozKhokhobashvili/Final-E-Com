import React from "react";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Bestseller from "../components/Bestseller";
import Startbrowsing from "../components/Startbrowsing";
import Productlist from "../components/Productlist";

const HomePage = () =>{
    return(
        <div>
            <Hero/>
            <Features/>
            <Bestseller/>
            <Startbrowsing/>
            <Productlist/>
        </div>
    )
}

export default HomePage;