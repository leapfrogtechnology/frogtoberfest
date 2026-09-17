import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import scanlineLeft from '../../assets/images/nav-scanline-left.svg';
import scanlineRight from '../../assets/images/nav-scanline-right.svg';
import logoLeapfrog from '../../assets/images/logo-leapfrog.png';

const NAV_CODE = 'AI‑FORGE‑2026';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const codeRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  /* ---- Terminal-cursor type-in for the nav HUD code label ---- */
  useEffect(() => {
    const el = codeRef.current;
    if (!el) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    el.classList.add('type-target');
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    el.appendChild(document.createTextNode(''));
    el.appendChild(cursor);

    let i = 0;
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        if (i >= NAV_CODE.length) {
          clearInterval(interval);
          return;
        }
        cursor.insertAdjacentText('beforebegin', NAV_CODE[i]);
        i++;
      }, 45);
    }, 300);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
      el.textContent = NAV_CODE;
    };
  }, []);

  return (
    <nav className="nav" style={{ backgroundImage: `url(${scanlineLeft}), url(${scanlineRight})` }}>
      <div className="wrap">
        <Link
          to="/"
          className="nav-brand"
          onClick={e => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src={logoLeapfrog} alt="Leapfrog Open Source" />
          <span className="div" aria-hidden="true"></span>
          <span className="nav-code" ref={codeRef}>
            {NAV_CODE}
          </span>
        </Link>
        <div
          className={`nav-links${isOpen ? ' is-open' : ''}`}
          id="navLinks"
          onClick={e => {
            if (e.target.tagName === 'A') setIsOpen(false);
          }}
        >
          <Link to="/#beyond" className={hash === '#beyond' ? 'is-active' : undefined}>
            Participation
          </Link>
          <Link to="/#recognition" className={hash === '#recognition' ? 'is-active' : undefined}>
            Recognition
          </Link>
          <Link to="/#timeline" className={hash === '#timeline' ? 'is-active' : undefined}>
            Timeline
          </Link>
          <Link to="/#resources" className={hash === '#resources' ? 'is-active' : undefined}>
            FAQs
          </Link>
          <Link
            to="/guidelines"
            target="_blank"
            rel="noopener noreferrer"
            className={pathname === '/guidelines' ? 'is-active' : undefined}
          >
            Guidelines
          </Link>
          <a className="nav-links-cta" href="https://frog.ly/frogtoberfest-2026">
            Register Now
          </a>
        </div>
        <a
          className={`btn btn-primary nav-cta${pathname !== '/' ? ' is-visible' : ''}`}
          id="navCta"
          href="https://frog.ly/frogtoberfest-2026"
        >
          <span className="nav-cta-inner">
            <span className="chip" aria-hidden="true"></span> Register Now
          </span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="navLinks"
          onClick={() => setIsOpen(open => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav-toggle-bars" aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  );
}
