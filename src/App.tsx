import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Trips from './components/Trips';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

// Destination Detail Pages
import Bali from './components/destinations/Bali';
import Turkey from './components/destinations/Turkey';
import LasVegas from './components/destinations/LasVegas';
import JoshuaTree from './components/destinations/JoshuaTree';
import Florida from './components/destinations/Florida';
import LakeTahoe from './components/destinations/LakeTahoe';

// Trip Detail Pages
import BaliTrip from './components/trips/BaliTrip';
import TurkeyTrip from './components/trips/TurkeyTrip';
import LasVegasTrip from './components/trips/LasVegasTrip';
import JoshuaTreeTrip from './components/trips/JoshuaTreeTrip';
import FloridaTrip from './components/trips/FloridaTrip';
import LakeTahoeTrip from './components/trips/LakeTahoeTrip';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/bali" element={<Bali />} />
            <Route path="/destinations/turkey" element={<Turkey />} />
            <Route path="/destinations/las-vegas" element={<LasVegas />} />
            <Route path="/destinations/joshua-tree" element={<JoshuaTree />} />
            <Route path="/destinations/florida" element={<Florida />} />
            <Route path="/destinations/lake-tahoe" element={<LakeTahoe />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/bali" element={<BaliTrip />} />
            <Route path="/trips/turkey" element={<TurkeyTrip />} />
            <Route path="/trips/vegas" element={<LasVegasTrip />} />
            <Route path="/trips/joshua-tree" element={<JoshuaTreeTrip />} />
            <Route path="/trips/florida" element={<FloridaTrip />} />
            <Route path="/trips/lake-tahoe" element={<LakeTahoeTrip />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;