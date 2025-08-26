import React from "react"
import Navbar from "./components/Navbar/navbar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from "./components/Navbar2/navbar2";
import Background from "./components/Background/background";

function app() {
  return <div>
    <Navbar />
    <Navbar2 />
    <Background />
  </div>
}
export default app