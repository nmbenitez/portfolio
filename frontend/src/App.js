import logo from './logo.svg';
import TopMenu from "./components/TopMenu";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  

  return (
    <div className="App">
      <TopMenu />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
