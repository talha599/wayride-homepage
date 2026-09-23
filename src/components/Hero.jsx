import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import BookingCard from './BookingCard';
import { images } from '../data';

export default function Hero() {
  const hero = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-kicker', { y: 20, opacity: 0, duration: .5 })
        .from('.hero-title', { y: 36, opacity: 0, duration: .8, ease: 'power3.out' }, '-=.25')
        .from('.hero-copy', { y: 20, opacity: 0, duration: .55 }, '-=.35')
        .from('.booking-card', { y: 45, opacity: 0, duration: .8, ease: 'power3.out' }, '-=.2');
    }, hero);
    return () => ctx.revert();
  }, []);
  return <section ref={hero} className="hero" id="top">
    <div className="hero-bg" style={{ backgroundImage: `linear-gradient(90deg,rgba(3,42,45,.94) 0%,rgba(3,42,45,.72) 42%,rgba(3,42,45,.25) 100%),url('${images.hero}')` }} />
    <div className="container hero-inner">
      <div className="hero-copy-wrap">
        <div className="hero-kicker"><span /> SMARTER RIDES. BETTER JOURNEYS.</div>
        <h1 className="hero-title">Move freely.<br /><em>Arrive happy.</em></h1>
        <p className="hero-copy">Choose your city, pick your car and enjoy the journey with WayRide’s trusted drivers.</p>
        <div className="hero-actions"><a className="primary" href="#app">Download App <ArrowRight size={18} /></a><a className="ghost" href="#services">Explore rides</a></div>
      </div>
      <BookingCard />
    </div>
  </section>;
}
