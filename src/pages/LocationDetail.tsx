import { Link, Navigate, useParams } from 'react-router';
import { MapPin, PhoneCall } from 'lucide-react';
import { getLocationBySlug } from '../data/locations';
import { serviceDetails } from '../data/services';

type LocationDetailProps = {
  slug?: string;
};

export default function LocationDetail({ slug: routeSlug }: LocationDetailProps) {
  const { slug } = useParams();
  const location = getLocationBySlug(routeSlug ?? slug);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="location-page">
      <section className="location-hero">
        <div>
          <p className="service-kicker">{location.region} Service Area</p>
          <h1>{location.title}</h1>
          <p>{location.summary}</p>
          <div className="service-actions">
            <Link to="/#booking" className="btn">Book Service Now</Link>
            <a href="tel:09354946745" className="service-call-link">
              <PhoneCall size={18} />
              0935-494-6745
            </a>
          </div>
        </div>
        <img src={location.image} alt={location.title} />
      </section>

      <section className="location-content">
        <div className="location-panel location-intro">
          <MapPin size={34} />
          <div>
            <h2>GENRO in {location.city}</h2>
            <p>
              Our team supports residential, commercial, and emergency plumbing needs around {location.city}.
              We handle septic tank siphoning, declogging, drain cleaning, leak repairs, and related Malabanan services.
            </p>
          </div>
        </div>

        <div className="location-panel">
          <h2>Available Services</h2>
          <div className="location-service-grid">
            {serviceDetails.map((service) => (
              <Link key={service.slug} to={`/${service.slug}`}>
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div className="location-panel">
          <h2>Nearby Areas We Serve</h2>
          <div className="nearby-grid">
            {location.nearbyAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="service-cta">
          <div>
            <h2>Need Malabanan service in {location.city}?</h2>
            <p>Call GENRO or send a booking request. Emergency services are available 24/7.</p>
          </div>
          <Link to="/#booking" className="btn">Request a Schedule</Link>
        </div>
      </section>
    </main>
  );
}
