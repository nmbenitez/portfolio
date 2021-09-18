import logo from './logo.svg';
import TopMenu from "./components/TopMenu";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <div className="App">
      <TopMenu />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
