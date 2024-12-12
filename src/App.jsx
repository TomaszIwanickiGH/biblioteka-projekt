import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksSection from './components/BooksSection';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';

const App = () => {
  return (
    <Router>
      <LoginModal />
      <RegisterModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksSection />} />
        <Route path="/book/works/:bookId" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
