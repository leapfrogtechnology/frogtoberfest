import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="grain" aria-hidden="true"></div>
      <div className="scanlines" aria-hidden="true"></div>

      <Nav />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guidelines" element={<Guidelines />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
