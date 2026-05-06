import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Myteam from './components/Myteam';
import Rooms from './components/Rooms';
import Section from './components/Section';
import Service from './components/Service';
import Think from './components/Think';

function App() {
  return (
    <div className="App">
        <Header />
        <Section />
        <Service />
        <Rooms />
        <About />
        <Myteam />
        <Think /> 
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
