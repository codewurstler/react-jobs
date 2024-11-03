import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={ <HomePage />} />
            <Route path="/jobs" element={ <JobsPage />} />
            <Route path="*" element={ <NotFoundPage /> } />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;