import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Practice Areas - Aequitas Law Partners',
  description: 'Comprehensive legal services across multiple practice areas including corporate law, litigation, real estate, employment law, intellectual property, and estate planning.',
};

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "Comprehensive business legal services for corporations, LLCs, and partnerships.",
      icon: "🏢",
      services: [
        "Business Formation & Structure",
        "Mergers & Acquisitions", 
        "Corporate Governance",
        "Securities Law",
        "Contract Negotiation",
        "Compliance & Regulatory Affairs"
      ]
    },
    {
      title: "Litigation & Dispute Resolution",
      description: "Experienced trial attorneys handling complex civil and commercial disputes.",
      icon: "⚖️",
      services: [
        "Commercial Litigation",
        "Contract Disputes",
        "Employment Litigation",
        "Real Estate Disputes",
        "Alternative Dispute Resolution",
        "Appeals"
      ]
    },
    {
      title: "Real Estate Law",
      description: "Full-service real estate legal support for all types of property transactions.",
      icon: "🏠",
      services: [
        "Residential & Commercial Transactions",
        "Real Estate Development",
        "Zoning & Land Use",
        "Property Disputes",
        "Landlord-Tenant Law",
        "Real Estate Finance"
      ]
    },
    {
      title: "Employment Law",
      description: "Protecting the rights of both employers and employees in workplace matters.",
      icon: "👥",
      services: [
        "Employment Contracts",
        "Workplace Compliance",
        "Discrimination & Harassment",
        "Wage & Hour Issues",
        "Executive Compensation",
        "Workplace Policies"
      ]
    },
    {
      title: "Intellectual Property",
      description: "Safeguarding your innovations, brands, and creative works.",
      icon: "💡",
      services: [
        "Patent Applications",
        "Trademark Registration",
        "Copyright Protection",
        "Trade Secrets",
        "IP Licensing",
        "Infringement Defense"
      ]
    },
    {
      title: "Estate Planning & Probate",
      description: "Comprehensive estate planning and wealth preservation strategies.",
      icon: "📋",
      services: [
        "Wills & Trusts",
        "Estate Administration",
        "Tax Planning",
        "Asset Protection",
        "Business Succession Planning",
        "Elder Law"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy text-cream py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-slate to-navy opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our <span className="text-gold">Practice Areas</span></h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple practice areas, delivering strategic solutions 
              tailored to meet your specific needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-light-gray rounded-lg shadow-lg overflow-hidden border-t-4 border-gold hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{area.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{area.title}</h3>
                      <p className="text-navy/70">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-navy mb-4">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-navy/80">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-6 bg-gold text-navy px-6 py-3 rounded-sm hover:bg-dark-gold transition-colors duration-300 font-semibold tracking-wide uppercase">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Industries We Serve</h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Our diverse experience spans across multiple industries, allowing us to provide 
              specialized legal guidance tailored to your sector's unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "Technology",
              "Healthcare", 
              "Finance",
              "Real Estate",
              "Manufacturing",
              "Retail",
              "Construction",
              "Energy",
              "Education",
              "Non-Profit",
              "Entertainment",
              "Hospitality"
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gold/20 hover:border-gold/50">
                  <h3 className="text-navy font-semibold">{industry}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-xl text-cream/90 mb-8">
            Our experienced attorneys are ready to help you navigate your legal challenges. 
            Contact us today to discuss how we can assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-sm hover:bg-dark-gold transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-cream text-cream px-8 py-4 rounded-sm hover:bg-cream hover:text-navy transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
