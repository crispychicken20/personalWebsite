import Navbar from "./components/navbar";
import Greeting from "./components/greeting";
import Project from "./components/project";
import About from "./components/about";
import Footer from "./components/footer";

export default function page(){
  return(
    <>
     <Navbar />
     <Greeting />
     <Project />
     <About />
     <Footer />
    </>
  )
}