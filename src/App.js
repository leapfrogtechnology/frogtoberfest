import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';

/* Client-side route changes don't reset scroll position on their own the
   way a real page load does, so a nav click from partway down one page
   (e.g. Home's Timeline section) lands partway down the next page too.
   Hash links (/#beyond) are handled separately by Home's own effect, so
   skip this when a hash is present rather than fighting that scroll. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
