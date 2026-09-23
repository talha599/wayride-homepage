import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const links = ['About Us', 'Earn With WayRide', 'WayRide Business', 'WayRide Club', 'Campaign', 'Blogs'];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <div className="container nav">
      <a className="brand" href="#top" aria-label="WayRide home"><span className="brand-mark">W</span><span>Way<span>Ride</span></span></a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {links.map(link => <a key={link} href="#services" onClick={() => setOpen(false)}>{link}</a>)}
        <button className="lang" type="button">English <ChevronDown size={14} /></button>
      </nav>
      <button className="mobile-menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
