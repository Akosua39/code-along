import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";





const App = () => {
  return (
   <BrowserRouter>
  < Navbar/>
   <Routes>
     <Route path="about" element={<About/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="blog" element={<Blog/>}>
       <Route path="" element={<BlogList/>} />
       <Route path=":blog" element={<BlogDetail/>} />
        </Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App;