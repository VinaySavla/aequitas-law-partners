import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Legal Resources - Aequitas Law Partners',
  description: 'Access helpful legal resources, guides, and frequently asked questions from Aequitas Law Partners.',
};

export default function Resources() {
  const resourceCategories = [
    {
      title: "Business Law Resources",
      icon: "🏢",
      resources: [
        { title: "Starting a Business: Legal Checklist", type: "Guide" },
        { title: "Understanding Corporate Governance", type: "Article" },
        { title: "Contract Essentials for Small Business", type: "Guide" },
        { title: "Merger & Acquisition Process Overview", type: "Article" }
      ]
    },
    {
      title: "Real Estate Resources",
      icon: "🏠",
      resources: [
        { title: "Commercial Real Estate Purchase Guide", type: "Guide" },
        { title: "Understanding Zoning Laws", type: "Article" },
        { title: "Landlord-Tenant Rights & Responsibilities", type: "Guide" },
        { title: "Real Estate Development Legal Requirements", type: "Article" }
      ]
    },
    {
      title: "Employment Law Resources",
      icon: "👥",
      resources: [
        { title: "Employee Handbook Template", type: "Template" },
        { title: "Workplace Discrimination Prevention", type: "Guide" },
        { title: "Understanding At-Will Employment", type: "Article" },
        { title: "Executive Compensation Planning", type: "Guide" }
      ]
    },
    {
      title: "Estate Planning Resources",
      icon: "📋",
      resources: [
        { title: "Estate Planning Checklist", type: "Checklist" },
        { title: "Understanding Trust Structures", type: "Guide" },
        { title: "Tax-Efficient Wealth Transfer Strategies", type: "Article" },
        { title: "Business Succession Planning", type: "Guide" }
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I know if I need a lawyer?",
      answer: "You should consider consulting with an attorney when facing legal documents, disputes, regulatory compliance issues, or any situation where legal rights or obligations are involved. Early consultation often prevents more serious problems later."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Bring all relevant documents, correspondence, contracts, and any materials related to your legal matter. Prepare a timeline of events and a list of questions you'd like to address during the consultation."
    },
    {
      question: "How are legal fees structured?",
      answer: "Fee structures vary by practice area and case complexity. We offer hourly rates, flat fees for certain services, and contingency arrangements where appropriate. We'll discuss fee structures transparently during your consultation."
    },
    {
      question: "How long do legal matters typically take?",
      answer: "The timeline varies significantly depending on the complexity of the matter, court schedules, and other factors. We'll provide realistic expectations and keep you informed of progress throughout the process."
    },
    {
      question: "Do you handle cases outside your local area?",
      answer: "Yes, we're licensed in multiple jurisdictions and can handle matters across various states. We also work with local counsel when necessary to ensure the best representation for our clients."
    },
    {
      question: "What is attorney-client privilege?",
      answer: "Attorney-client privilege protects confidential communications between you and your attorney. This means we cannot disclose information you share with us without your consent, ensuring you can speak freely about your legal matters."
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
            <h1 className="text-5xl font-bold mb-6">Legal <span className="text-gold">Resources</span></h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Access helpful legal resources, guides, and frequently asked questions to better 
              understand your legal needs and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Browse by Practice Area</h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Find resources tailored to your specific legal needs across our various practice areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-light-gray rounded-lg shadow-lg p-8 border-t-4 border-gold hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-navy">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between p-3 bg-cream rounded-md hover:bg-gold/10 transition-colors duration-200">
                      <div>
                        <h4 className="font-semibold text-navy">{resource.title}</h4>
                        <span className="text-sm text-gold">{resource.type}</span>
                      </div>
                      <button className="text-gold hover:text-navy transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 text-gold font-semibold hover:text-navy transition-colors duration-200">
                  View All Resources →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-navy/70">
              Get answers to common questions about our legal services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cream rounded-lg border-l-4 border-gold">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-3">{faq.question}</h3>
                  <p className="text-navy/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-navy/70 mb-6">
              Don't see your question answered here?
            </p>
            <button className="bg-gold text-cream px-8 py-4 rounded-md hover:bg-gold/90 transition-colors duration-200 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gold">Important Legal Notice</h2>
            <div className="space-y-4 text-cream/90 leading-relaxed">
              <p>
                The information provided in these resources is for general informational purposes only 
                and does not constitute legal advice. Laws vary by jurisdiction and change frequently. 
                The content on this page should not be relied upon as a substitute for competent legal counsel.
              </p>
              <p>
                These resources are provided as a service to help you better understand legal concepts 
                and identify when you may need professional legal assistance. For advice regarding your 
                specific situation, please consult with a qualified attorney.
              </p>
              <p className="font-semibold text-gold">
                Reviewing these resources does not create an attorney-client relationship between you 
                and Aequitas Law Partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Stay Informed</h2>
          <p className="text-xl text-navy/70 mb-8">
            Subscribe to our newsletter for legal updates, new resources, and insights from our attorneys.
          </p>
          
          <div className="bg-light-gray rounded-lg p-8 shadow-lg border-t-4 border-gold max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-navy font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-gold"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold text-cream py-3 rounded-md hover:bg-gold/90 transition-colors duration-200 font-semibold"
              >
                Subscribe
              </button>
              <p className="text-xs text-navy/60">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
