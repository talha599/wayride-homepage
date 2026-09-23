import { useState } from 'react';
import { ArrowRight, CalendarDays, CarFront, MapPin, Plane } from 'lucide-react';

export default function BookingCard() {
  const [type, setType] = useState('One Way');
  const [airport, setAirport] = useState(false);
  const [message, setMessage] = useState('');
  const handleContinue = () => setMessage('Demo booking ready — connect this form to your booking API when a backend is available.');
  return <div className="booking-card reveal" aria-label="Ride booking form">
    <div className="booking-tabs">
      <button type="button" className={!airport ? 'active' : ''} onClick={() => { setAirport(false); setMessage(''); }}>City Ride</button>
      <button type="button" className={airport ? 'active' : ''} onClick={() => { setAirport(true); setMessage(''); }}><Plane size={16} /> Airport</button>
    </div>
    <div className="booking-grid">
      <label><span><CarFront size={16} /> Choose a Car *</span><select aria-label="Choose a car"><option>Select Car Type</option><option>Economy</option><option>Premium Sedan</option><option>7-Seater</option></select></label>
      <label><span><MapPin size={16} /> {airport ? 'Pickup Airport *' : 'Pickup Location *'}</span>{airport ? <select aria-label="Pickup airport"><option>Select Airport</option><option>Hazrat Shahjalal International Airport</option></select> : <input aria-label="Pickup location" placeholder="Enter pickup location" />}</label>
      <label><span><MapPin size={16} /> Drop-off Location *</span><input aria-label="Drop-off location" placeholder="Enter drop-off location" /></label>
      <label><span><CalendarDays size={16} /> Pickup Date & Time *</span><input aria-label="Pickup date and time" type="datetime-local" /></label>
    </div>
    <div className="booking-bottom">
      <div className="ride-types" role="group" aria-label="Ride type">
        {(airport ? ['From Airport', 'From Home'] : ['One Way', 'Round Way', 'Hourly']).map(item => <button key={item} type="button" className={type === item ? 'selected' : ''} onClick={() => setType(item)}><span className="radio" />{item}</button>)}
      </div>
      <button className="continue" type="button" onClick={handleContinue}>Continue <ArrowRight size={17} /></button>
    </div>
    {message && <p className="booking-message" role="status">{message}</p>}
  </div>;
}
