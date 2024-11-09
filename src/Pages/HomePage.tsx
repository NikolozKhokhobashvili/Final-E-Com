import React from "react";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Bestseller from "../components/Bestseller";
import Startbrowsing from "../components/Startbrowsing";
import Productlist from "../components/Productlist";
import Layout from "../components/Layout";

const HomePage = () =>{
    return(
        <Layout>
            <Hero/>
            <Features/>
            <Bestseller/>
            <Startbrowsing/>
            <Productlist/>
        </Layout>
    )
}

export default HomePage;