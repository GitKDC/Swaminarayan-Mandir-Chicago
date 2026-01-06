
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from '../src/components/HeroSection'
import './App.css'
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import DarshanPage from './pages/DarshanPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/darshan' element={<DarshanPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/gallery' element={<GalleryPage/>} />
        </Routes>

        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
