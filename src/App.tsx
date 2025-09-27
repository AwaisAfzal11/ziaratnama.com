import {  Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Import Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Destinations } from './pages/Destinations';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';
import { Travelism } from './pages/Travelism';

export default function App() {

  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/destinations" element={<Destinations  />} />
          <Route path="/packages" element={<Packages  />} />
          <Route path="/travelism" element={<Travelism  />} />
          <Route path="/contact" element={<Contact  />} />
        </Routes>
      </Layout>

  );
}
