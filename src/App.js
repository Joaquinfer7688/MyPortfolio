import Navbar from "./components/Navbar/Navbar/navbar";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
