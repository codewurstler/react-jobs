import React from 'react';
import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/viewAllJobs.jsx";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </>
    );
};

export default HomePage;