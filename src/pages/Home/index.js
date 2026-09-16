import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero';
import Beyond from '../../components/Beyond';
import Timeline from '../../components/Timeline';
import Recognition from '../../components/Recognition';
import Resources from '../../components/Resources';
import DemoDay from '../../components/DemoDay';

export default function Home() {
  const { hash } = useLocation();

  /* ---- Client-side routing doesn't jump to a URL's #hash on its own the
     way a real page load does, so do it ourselves once this page's
     sections exist to scroll to (e.g. arriving via a Nav link from
     another page, such as /guidelines -> /#beyond). ---- */
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <Beyond />
      <Recognition />
      <Timeline />
      <Resources />
      <DemoDay />
    </>
  );
}
