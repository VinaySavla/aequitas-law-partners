import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us - Aequitas Law Partners',
  description: 'Learn about Aequitas Law Partners\' history, values, and commitment to providing exceptional legal services with integrity and expertise.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy text-cream py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About <span className="text-gold">Aequitas</span> Law Partners</h1>
            <p className="text-lg sm:text-xl text-cream/90 max-w-3xl mx-auto">
              Founded on principles of justice, integrity, and excellence, we are committed to providing 
              our clients with the highest caliber of legal representation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-navy/80 leading-relaxed">
                <p>
                  Aequitas Law Partners was established with a vision to create a law firm that combines 
                  traditional legal excellence with innovative approaches to modern legal challenges. 
                  The name "Aequitas" derives from the Roman goddess of fair dealing and equity, 
                  reflecting our unwavering commitment to justice and fairness.
                </p>
                <p>
                  Since our founding, we have grown from a small practice to a comprehensive law firm 
                  serving clients across multiple practice areas. Our success is built on a foundation 
                  of trust, expertise, and an unwavering dedication to achieving the best possible 
                  outcomes for our clients.
                </p>
                <p>
                  We believe that legal representation should be more than just technical expertise – 
                  it should be a partnership built on understanding, communication, and shared goals. 
                  This philosophy guides everything we do, from our first consultation with a client 
                  to the final resolution of their legal matter.
                </p>
              </div>
            </div>
            <div className="bg-light-gray rounded-lg p-8 shadow-lg border-l-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-6">Our Mission</h3>
              <p className="text-navy/80 leading-relaxed mb-6">
                To provide exceptional legal services while maintaining the highest standards of 
                integrity, professionalism, and client advocacy. We strive to achieve favorable 
                outcomes through strategic thinking, meticulous preparation, and unwavering dedication.
              </p>
              <h3 className="text-2xl font-bold text-navy mb-6">Our Vision</h3>
              <p className="text-navy/80 leading-relaxed">
                To be recognized as the premier law firm that clients trust for their most important 
                legal matters, known for our expertise, ethics, and exceptional client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              These fundamental principles guide our practice and define our relationship with clients, 
              colleagues, and the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We conduct ourselves with the highest ethical standards in all aspects of our practice.",
                icon: "⚖️"
              },
              {
                title: "Excellence",
                description: "We strive for exceptional quality in every legal service we provide to our clients.",
                icon: "🏆"
              },
              {
                title: "Dedication",
                description: "We are committed to achieving the best possible outcomes for each client we serve.",
                icon: "💪"
              },
              {
                title: "Innovation",
                description: "We embrace new approaches and technologies to provide efficient, effective legal solutions.",
                icon: "💡"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-navy/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Statistics */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to client success and legal excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "500+", label: "Cases Successfully Resolved" },
              { number: "50+", label: "Corporate Clients Served" },
              { number: "98%", label: "Client Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-cream/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-navy/70 mb-8">
            Experience the difference that dedicated, professional legal representation can make. 
            Contact us today to discuss your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-sm hover:bg-dark-gold transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              Schedule Consultation
            </button>
            <button className="border-2 border-navy text-navy px-8 py-4 rounded-sm hover:bg-navy hover:text-cream transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
