import Navbar from "./components/navbar";
import Greeting from "./components/greeting";
import Project from "./components/project";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function page(){
  return(
    <>
     <Navbar />
     <main className="bg-slate-50 min-h-screen pt-20 px 4 sm:px-6 lg-px-8">
        <div className="max-w-5xl mx-auto">
          <Contact />
          <Greeting />
          <About />
          <Project />
        </div>
     </main>
     <Footer />
    </>
  )
}