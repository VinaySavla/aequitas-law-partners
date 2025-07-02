import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us - Aequitas Law Partners',
  description: 'Contact Aequitas Law Partners for a consultation. Multiple office locations and various ways to reach our experienced legal team.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy text-cream py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact <span className="text-gold">Aequitas</span> Law Partners</h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Ready to discuss your legal needs? We offer multiple convenient ways to reach our team 
              and schedule a consultation that fits your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              
              {/* Office Locations */}
              <div className="space-y-8">
                <div className="bg-light-gray rounded-lg p-6 shadow-lg border-l-4 border-gold">
                  <h3 className="text-xl font-bold text-navy mb-4">Main Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-gold mr-3 mt-1">📍</span>
                      <div>
                        <p className="text-navy font-semibold">123 Legal Plaza, Suite 500</p>
                        <p className="text-navy/70">Metropolitan City, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gold mr-3">📞</span>
                      <span className="text-navy">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gold mr-3">📠</span>
                      <span className="text-navy">(555) 123-4568</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gold mr-3">✉️</span>
                      <a href="mailto:info@aequitaslaw.com" className="text-gold hover:text-navy transition-colors">
                        info@aequitaslaw.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-light-gray rounded-lg p-6 shadow-lg border-l-4 border-gold">
                  <h3 className="text-xl font-bold text-navy mb-4">Satellite Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-gold mr-3 mt-1">📍</span>
                      <div>
                        <p className="text-navy font-semibold">456 Business Center Dr, Floor 12</p>
                        <p className="text-navy/70">Downtown District, ST 12346</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gold mr-3">📞</span>
                      <span className="text-navy">(555) 123-4570</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gold mr-3">✉️</span>
                      <a href="mailto:downtown@aequitaslaw.com" className="text-gold hover:text-navy transition-colors">
                        downtown@aequitaslaw.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-navy rounded-lg p-6 text-cream">
                <h3 className="text-xl font-bold mb-4 text-gold">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cream/20">
                    <p className="text-sm text-cream/80">
                      Emergency consultations available 24/7 for existing clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Schedule a Consultation</h2>
              <form className="bg-light-gray rounded-lg p-8 shadow-lg border-t-4 border-gold">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-semibold mb-2">First Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-semibold mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Practice Area of Interest</label>
                    <select className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold">
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="litigation">Litigation</option>
                      <option value="real-estate">Real Estate Law</option>
                      <option value="employment">Employment Law</option>
                      <option value="intellectual-property">Intellectual Property</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold">
                      <option value="">Please select</option>
                      <option value="referral">Referral from client/attorney</option>
                      <option value="search">Internet search</option>
                      <option value="social">Social media</option>
                      <option value="advertising">Advertising</option>
                      <option value="directory">Legal directory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Please describe your legal matter *</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      placeholder="Please provide a brief description of your legal needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-sm text-navy/70 bg-cream p-4 rounded-md">
                    <p className="mb-2">
                      <strong>Important:</strong> Submitting this form does not create an attorney-client relationship. 
                      Do not include confidential or sensitive information in your message.
                    </p>
                    <p>
                      By submitting this form, you agree to our privacy policy and consent to receive communications from our firm.
                    </p>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gold text-cream py-4 rounded-md hover:bg-gold/90 transition-colors duration-200 font-semibold text-lg"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Additional Ways to Reach Us</h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              We understand that different situations require different communication methods. 
              Choose the option that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-cream rounded-lg p-8 border-4 border-gold/20 hover:border-gold/50 transition-colors duration-200">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-navy mb-3">Call Us</h3>
              <p className="text-navy/70 mb-4">
                Speak directly with our intake team to discuss your needs and schedule a consultation.
              </p>
              <a href="tel:+15551234567" className="text-gold font-semibold hover:text-navy transition-colors">
                (555) 123-4567
              </a>
            </div>
            
            <div className="text-center bg-cream rounded-lg p-8 border-4 border-gold/20 hover:border-gold/50 transition-colors duration-200">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-navy mb-3">Email Us</h3>
              <p className="text-navy/70 mb-4">
                Send us an email for general inquiries or to request information about our services.
              </p>
              <a href="mailto:info@aequitaslaw.com" className="text-gold font-semibold hover:text-navy transition-colors">
                info@aequitaslaw.com
              </a>
            </div>
            
            <div className="text-center bg-cream rounded-lg p-8 border-4 border-gold/20 hover:border-gold/50 transition-colors duration-200">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-navy mb-3">Visit Our Office</h3>
              <p className="text-navy/70 mb-4">
                Schedule an in-person meeting at one of our convenient office locations.
              </p>
              <span className="text-gold font-semibold">
                By Appointment Only
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
