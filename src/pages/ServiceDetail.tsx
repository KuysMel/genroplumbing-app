import { Link, Navigate, useParams } from 'react-router';
import { CheckCircle, PhoneCall } from 'lucide-react';
import { getServiceBySlug } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <p className="service-kicker">GENRO Malabanan Services</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="service-actions">
            <Link to="/#booking" className="btn">Book Service Now</Link>
            <a href="tel:09354946745" className="service-call-link">
              <PhoneCall size={18} />
              0935-494-6745
            </a>
          </div>
        </div>
        <img src={service.image} alt={service.title} />
      </section>

      <section className="service-content">
        <div className="service-panel">
          <h2>Why Choose This Service</h2>
          <div className="service-highlight-grid">
            {service.highlights.map((highlight) => (
              <div key={highlight} className="service-highlight">
                <CheckCircle size={22} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-panel">
          <h2>What Is Included</h2>
          <ul className="service-list">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="service-cta">
          <div>
            <h2>Need {service.shortTitle} today?</h2>
            <p>GENRO is available for scheduled work and emergency service across Central Luzon, NCR, and CALABARZON.</p>
          </div>
          <Link to="/#booking" className="btn">Request a Schedule</Link>
        </div>
      </section>
    </main>
  );
}
