import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
const Home = lazy(() => import("./Home/Home"));
const Catalog = lazy(() => import("./Catalog/Catalog"));
const Favorite = lazy(() => import("./Favorite/Favorite"));

export const App = () => {

    return <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route path="favorites" element={<Favorite/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
</Suspense>
    
};

