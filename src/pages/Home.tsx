import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Home as HomeIcon, Menu, X } from 'lucide-react';
import { serviceDetails } from '../data/services';
import { locationDetails } from '../data/locations';
import { assetPath } from '../lib/assets';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Booking', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    address: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const galleryImages = [
    assetPath('images/gallery/01.jpeg'),
    assetPath('images/gallery/02.jpeg'),
    assetPath('images/gallery/03.jpeg'),
    assetPath('images/gallery/04.jpeg'),
    assetPath('images/gallery/05.jpeg'),
    assetPath('images/gallery/06.jpeg'),
    assetPath('images/gallery/07.jpeg'),
    assetPath('images/gallery/08.jpeg'),
    assetPath('images/gallery/09.jpeg'),
    assetPath('images/gallery/10.jpeg'),
    assetPath('images/gallery/11.jpeg'),
    assetPath('images/gallery/12.jpeg'),
    assetPath('images/gallery/13.jpeg'),
    assetPath('images/gallery/14.jpeg'),
    assetPath('images/gallery/15.jpeg'),
    assetPath('images/gallery/16.jpeg'),
  ];

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'test_key');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const templateParams = {
        to_email: 'abadiola4@gmail.com',
        from_name: formData.name,
        from_email: formData.email || 'not provided',
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        address: formData.address,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_test',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_test',
        templateParams
      );

      setSuccessMessage('✓ Booking request sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        address: '',
      });

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMessage('Failed to send booking. Please try again or call directly.');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <a href="/" className="logo" aria-label="Go to homepage">
          <img src={assetPath('logo.png')} alt="Genro Malabanan" className="logo-img" />
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <button
          type="button"
          className="burger-button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={30} />
        </button>
      </header>

      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-menu-top">
          <img src={assetPath('logo.png')} alt="Genro Malabanan" className="mobile-menu-logo" />
          <button
            type="button"
            className="mobile-close-button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <a href="/" className="mobile-exit-link" onClick={() => setIsMobileMenuOpen(false)}>
          <HomeIcon size={20} />
          Exit to Home
        </a>

        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* HERO */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0,8,20,0.86) 0%,rgba(0,29,61,0.74) 45%,rgba(0,0,0,0.34) 100%), url("${assetPath('images/genro01.jpeg')}")`,
        }}
      >
        <div className="hero-content">
          <h1>Professional Malabanan Siphoning Services</h1>

          <p>
            Fast, affordable, and reliable septic tank siphoning, declogging, plumbing repair, and
            pipeline maintenance services available 24/7 across Central Luzon.
          </p>

          <a href="#booking" className="btn">
            Book Service Now
          </a>

          {/* Certificates Tagline */}
          <div style={{
            marginTop: '40px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          }}>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#ffb703',
              marginBottom: '15px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}>
              Certificates:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px 20px',
              fontSize: '13px',
              color: '#fff',
              lineHeight: '1.6',
            }}>
              <div>✓ DENR ACCREDITED</div>
              <div>✓ BUSINESS PERMIT</div>
              <div>✓ DTI</div>
              <div>✓ BIR</div>
              <div>✓ SANITARY</div>
              <div>✓ DISPOSAL FACILITIES</div>
              <div>✓ PHILGEPS</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Professional residential and commercial solutions.</p>
        </div>

        <div className="services">
          {serviceDetails.map((service) => (
            <a key={service.slug} href={`/${service.slug}`} className="card service-card-link">
              <img src={service.image} alt={service.title} />

              <div className="card-content">
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <span>Learn More</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about">
          <div>
            <img
              src={assetPath('images/genro01.jpeg')}
              alt="About GENRO MALABANAN"
            />
          </div>

          <div className="about-content">
            <h3>About GENRO MALABANAN</h3>

            <p>
              GENRO MALABANAN SIPHONING SERVICES is a trusted provider of septic tank siphoning,
              declogging, and plumbing services with fast response and affordable rates.
            </p>

            <p>
              Our skilled technicians are equipped with modern tools and service vehicles to handle
              residential, commercial, and industrial maintenance needs.
            </p>

            <a href="#contact" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>


      {/* BOOKING */}
      <section id="booking">
        <div className="booking">
          <h2>Schedule Your Appointment</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option>Select Service</option>
              {serviceDetails.map((service) => (
                <option key={service.slug}>{service.shortTitle}</option>
              ))}
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <textarea
              className="full"
              name="address"
              placeholder="Complete Address & Additional Details"
              value={formData.address}
              onChange={handleChange}
            ></textarea>

            <input
              type="submit"
              value={isLoading ? "SENDING..." : "BOOK APPOINTMENT"}
              className="submit-btn full"
              disabled={isLoading}
            />
          </form>

          {successMessage && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderRadius: '8px',
              border: '1px solid #c3e6cb',
            }}>
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              borderRadius: '8px',
              border: '1px solid #f5c6cb',
            }}>
              {errorMessage}
            </div>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="section-title">
          <h2>Service Gallery</h2>
          <p>Actual field operations and completed projects.</p>
        </div>

        {/* Masonry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '0 8%',
          width: '100%',
        }}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px',
                cursor: 'pointer',
                backgroundColor: '#f0f0f0',
                aspectRatio: index % 5 === 0 || index % 5 === 4 ? '1' : '1 / 1.2',
                height: 'auto',
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease, filter 0.4s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)';
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.85)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1)';
                }}
              />
              {/* Overlay with icon */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                transition: 'backgroundColor 0.4s ease',
                pointerEvents: 'none',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(0, 0, 0, 0)';
                }}
              >
                <span style={{
                  color: 'white',
                  fontSize: '40px',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'auto',
                }}>
                  🔍
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={selectedImage}
              alt="Full size"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '10px',
              }}
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                backgroundColor: '#ffb703',
                border: 'none',
                color: '#001d3d',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffd166';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffb703';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-title">
          <h2>Customer Reviews</h2>
          <p>What our customers say about our services.</p>
        </div>

        <div className="testimonials">
          <div className="testimonial">
            <p>
              "Very fast response and professional technicians. Highly recommended for septic tank
              cleaning."
            </p>
            <h4>- Mark R.</h4>
          </div>

          <div className="testimonial">
            <p>
              "Affordable and reliable service. The team arrived on time and finished quickly."
            </p>
            <h4>- Angela D.</h4>
          </div>

          <div className="testimonial">
            <p>
              "Best Malabanan service we've used. Excellent customer service and quality work."
            </p>
            <h4>- Jerome T.</h4>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Important information about our services.</p>
        </div>

        <div className="faq">
          <div className="faq-item">
            <h4>How often should septic tanks be cleaned?</h4>
            <p>Most septic tanks should be cleaned every 3 to 5 years.</p>
          </div>

          <div className="faq-item">
            <h4>Do you offer emergency services?</h4>
            <p>Yes. Emergency plumbing and siphoning services are available 24/7.</p>
          </div>

          <div className="faq-item">
            <h4>What areas do you serve?</h4>
            <p>We provide services throughout Central Luzon and nearby provinces.</p>
          </div>

          <div className="faq-item">
            <h4>Can I book online?</h4>
            <p>Yes. Use the booking form above to schedule your appointment.</p>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations">
        <div className="section-title">
          <h2>Service Areas</h2>
          <p>GENRO Malabanan services are available across Laguna, Metro Manila, and Cavite.</p>
        </div>

        <div className="location-link-grid">
          {locationDetails.map((location) => (
            <a key={location.slug} href={`/${location.slug}`} className="location-link-card">
              <span>{location.region}</span>
              <strong>{location.city}</strong>
              <p>Malabanan services, septic siphoning, declogging, and emergency plumbing.</p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div
          className="contact"
          style={{
            backgroundImage: `linear-gradient(135deg,rgba(0,29,61,0.98),rgba(0,53,102,0.96)), url("${assetPath('images/genro04.jpeg')}")`,
          }}
        >
          <h2>Contact GENRO MALABANAN</h2>

          <p>
            📞 <a href="tel:09354946745">0935-494-6745</a>
          </p>
          <p>
            📞 <a href="tel:09813997654">0981-399-7654</a>
          </p>
          <p>
            ☎ <a href="tel:0288177523">02-881-775-23</a>
          </p>

          <p>✉ abadiola4@gmail.com</p>

          <p>📍 Office Address: Rosario Homes Brgy. San Antonio San Pedro Laguna</p>

          <p>Available 24 Hours for Emergency Services</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>© 2026 GENRO MALABANAN SIPHONING SERVICES All Rights Reserved</footer>

      {/* FLOATING BUTTONS */}
      <a href="https://m.me/mayet.badiola.1" className="messenger">
        Messenger
      </a>

      <a href="https://wa.me/639354946745" className="whatsapp">
        WhatsApp
      </a>
    </>
  );
}
