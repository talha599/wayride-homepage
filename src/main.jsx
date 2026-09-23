import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import SplitFeature from './components/SplitFeature';
import Freedom from './components/Freedom';
import Moments from './components/Moments';
import AppPromo from './components/AppPromo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { images } from './data';
import { useReveal } from './components/useReveal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useReveal();
  useEffect(() => () => ScrollTrigger.getAll().forEach(t => t.kill()), []);
  return <><Header /><main><Hero /><Stats /><Services /><SplitFeature eyebrow="WAYRIDE BUSINESS" title={<>Modern rides for <span>modern teams.</span></>} text="Simplify corporate transportation, keep your team moving on time, and gain better visibility over every trip." image={images.business} button="Explore Business" /><SplitFeature reverse eyebrow="WAYRIDE CLUB" title={<>Turn your car into <span>new earnings.</span></>} text="Join a community of car owners and turn the hours your vehicle sits idle into meaningful extra income." image={images.club} button="Join the Club" /><Freedom /><Moments /><SplitFeature eyebrow="VEHICLE MANAGEMENT SYSTEM" title={<>Keep every vehicle <span>working smarter.</span></>} text="A practical VMS built to help businesses track, organize and make the most of their vehicles." image={images.vms} button="Learn about VMS" /><AppPromo /><Testimonials /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
