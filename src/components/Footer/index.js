import React from 'react';
import lockup from '../../assets/images/open-source-x-lf-lockup.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          <img src={lockup} alt="Leapfrog Open Source x LF" loading="lazy" decoding="async" />
          <span>Frogtoberfest 2026 &middot; AI-Forge-2026</span>
        </div>
        <p className="footer-legal">&copy; 2026, Leapfrog Technology, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
