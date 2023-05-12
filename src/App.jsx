import "./App.css";
import { Navbar } from './components/Navbar';
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer";

/* Pages */
import { Clock } from "./pages/Clock";
import { Weight } from "./pages/Weight";
import { Photos } from "./pages/Photos";
import { Calendar } from "./pages/Calendar";

export default function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/weight" element={<Weight />} />     
        <Route path="/photos" element={<Photos />} />     
        <Route path="/calendar" element={<Calendar />} />     
      </Route>
    )
  );
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )

}

const Root = () => {
  return (
    <>
      <header><Navbar /></header>
      <main><Outlet /></main>
      <footer><Footer /></footer>
    </>
  )
}







/*
import "./App.css";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
*/