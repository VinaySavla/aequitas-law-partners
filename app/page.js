import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';

export default function Home() {
  return (
    <>
      <Disclaimer />
      <div className="min-h-screen bg-cream">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative bg-navy text-cream overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block bg-gold/10 text-gold px-3 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold tracking-wide uppercase border border-gold/30">
                    Premier Legal Services
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                  Excellence in 
                  <span className="block text-gold">Legal Representation</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-cream/90 leading-relaxed max-w-lg">
                  Distinguished legal counsel serving corporations, institutions, and discerning individuals 
                  with uncompromising dedication to achieving exceptional outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-dark-gold transition-all duration-300 font-semibold tracking-widest uppercase shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-cream text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-cream hover:text-navy transition-all duration-300 font-semibold tracking-widest uppercase shadow-lg hover:shadow-xl text-sm sm:text-base">
                    Our Expertise
                  </button>
                </div>
              </div>
  {/*
              <div className="mt-8 lg:mt-0">
                <div className="bg-slate/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm border border-gold/20">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-cream/80 text-sm sm:text-base">Client Success Rate</span>
                      <span className="text-gold font-bold text-xl sm:text-2xl">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream/80 text-sm sm:text-base">Years of Excellence</span>
                      <span className="text-gold font-bold text-xl sm:text-2xl">25+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream/80 text-sm sm:text-base">Cases Resolved</span>
                      <span className="text-gold font-bold text-xl sm:text-2xl">500+</span>
                    </div>
                    <div className="border-t border-gold/20 pt-3 sm:pt-4">
                      <p className="text-cream/70 text-xs sm:text-sm italic">
                        "Trusted by Fortune 500 companies and high-net-worth individuals"
                      </p>
                    </div>
                  </div>
                </div>
              </div> 
              */}
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-gold/10 text-gold px-3 sm:px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold tracking-wide uppercase border border-gold/30">
                  Legal Excellence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">Practice Areas</h2>
              <p className="text-lg sm:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
                Comprehensive legal expertise across critical practice areas, delivering strategic solutions 
                for complex challenges with precision and distinction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Corporate Law",
                  description: "Strategic counsel for mergers, acquisitions, governance, and complex business transactions.",
                  features: ["M&A Advisory", "Corporate Governance", "Securities Compliance"]
                },
                {
                  title: "Litigation",
                  description: "Sophisticated advocacy in high-stakes commercial disputes and complex civil matters.",
                  features: ["Commercial Litigation", "White Collar Defense", "Appeals"]
                },
                {
                  title: "Real Estate",
                  description: "Comprehensive representation in premium real estate transactions and development.",
                  features: ["Commercial Transactions", "Development", "Investment Structures"]
                },
                {
                  title: "Employment Law",
                  description: "Strategic employment counsel for executives and organizations.",
                  features: ["Executive Compensation", "Employment Compliance", "Workplace Investigations"]
                },
                {
                  title: "Intellectual Property",
                  description: "Protection and monetization of valuable intellectual property assets.",
                  features: ["Patent Portfolio", "Trademark Strategy", "IP Licensing"]
                },
                {
                  title: "Estate Planning",
                  description: "Sophisticated wealth preservation and succession planning for high-net-worth clients.",
                  features: ["Estate Planning", "Trust Administration", "Tax Strategy"]
                }
              ].map((area, index) => (
                <div key={index} className="bg-cream rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-gold">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">{area.title}</h3>
                    <p className="text-medium-gray leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{area.description}</p>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-slate">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="text-gold font-semibold hover:text-dark-gold transition-colors duration-300 tracking-wide uppercase text-xs sm:text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-dark-gray mb-8">Why Choose Aequitas Law Partners?</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Proven Track Record",
                      description: "Decades of combined experience with successful outcomes in complex legal matters."
                    },
                    {
                      title: "Client-Centered Approach",
                      description: "We prioritize your needs and goals, providing personalized legal strategies."
                    },
                    {
                      title: "Comprehensive Expertise",
                      description: "Our diverse team covers all aspects of business and personal legal needs."
                    },
                    {
                      title: "Transparent Communication",
                      description: "Clear, honest communication throughout every step of your legal journey."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-bronze rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark-gray mb-2">{feature.title}</h3>
                        <p className="text-dark-gray/70 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bronze rounded-lg p-8 text-warm-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Schedule Your Consultation</h3>
                <p className="mb-6 text-warm-white/95 leading-relaxed">
                  Ready to discuss your legal needs? Contact us today to schedule a confidential consultation 
                  with one of our experienced attorneys.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-light-bronze mr-3">📞</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-light-bronze mr-3">✉️</span>
                    <span>info@aequitaslaw.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-light-bronze mr-3">📍</span>
                    <span>123 Legal Plaza, Suite 500</span>
                  </div>
                </div>
                <button className="w-full bg-warm-white text-bronze py-3 rounded-md hover:bg-light-bronze hover:text-dark-bronze transition-colors duration-200 font-semibold">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
