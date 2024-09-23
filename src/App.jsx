import React, { useContext, useEffect } from "react"
import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Footer from "./Components/Footer"
import { AppContext } from "./context/AppContext";
function App() {

  const {handlePageChange} = useContext(AppContext);

  useEffect(()=>{
    handlePageChange();
  },[]);

  return (
    <div className="flex flex-col relative">
    <Header/>
    <Blogs/>
    <Footer/>
    </div>
  )
}

export default App
