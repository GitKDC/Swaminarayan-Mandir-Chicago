import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import BooksPage from './pages/BooksPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DarshanPage from './pages/DarshanPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/about' element={<AboutPage />} /> */}
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
