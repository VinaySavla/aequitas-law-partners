import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Our Attorneys - Aequitas Law Partners',
  description: 'Meet our experienced team of attorneys dedicated to providing exceptional legal representation across multiple practice areas.',
};

export default function Attorneys() {
  const attorneys = [
    {
      name: "Margaret Thompson",
      title: "Managing Partner",
      education: "Harvard Law School, J.D. | Yale University, B.A.",
      barAdmissions: "New York, California, District of Columbia",
      practiceAreas: ["Corporate Law", "Mergers & Acquisitions", "Securities Law"],
      experience: "25+ years",
      bio: "Margaret leads our corporate practice with over two decades of experience in complex business transactions. She has represented Fortune 500 companies in billion-dollar mergers and acquisitions, and her strategic counsel has helped numerous startups grow into industry leaders.",
      notable: "Named 'Lawyer of the Year' by Best Lawyers in America, 2023"
    },
    {
      name: "James Rodriguez",
      title: "Senior Partner",
      education: "Stanford Law School, J.D. | UC Berkeley, B.A.",
      barAdmissions: "California, New York, Texas",
      practiceAreas: ["Litigation", "Commercial Disputes", "Employment Law"],
      experience: "20+ years",
      bio: "James is a seasoned litigator with an impressive track record in high-stakes commercial disputes. His courtroom expertise and strategic approach have secured favorable outcomes in cases involving hundreds of millions in damages.",
      notable: "Successfully defended landmark employment discrimination case, 2022"
    },
    {
      name: "Sarah Chen",
      title: "Partner",
      education: "Columbia Law School, J.D. | MIT, B.S. Engineering",
      barAdmissions: "New York, New Jersey, Massachusetts",
      practiceAreas: ["Intellectual Property", "Technology Law", "Patent Litigation"],
      experience: "15+ years",
      bio: "Sarah combines her engineering background with legal expertise to provide comprehensive IP protection for technology companies. She has secured patents for groundbreaking innovations and successfully defended against patent infringement claims.",
      notable: "Leading expert in AI and machine learning patent law"
    },
    {
      name: "Michael Davis",
      title: "Partner",
      education: "Georgetown Law Center, J.D. | Georgetown University, B.A.",
      barAdmissions: "District of Columbia, Maryland, Virginia",
      practiceAreas: ["Real Estate Law", "Development", "Zoning"],
      experience: "18+ years",
      bio: "Michael specializes in complex real estate transactions and development projects. He has facilitated billions in real estate deals and helped developers navigate complex zoning and regulatory challenges across multiple jurisdictions.",
      notable: "Instrumental in $2.5B mixed-use development project, 2023"
    },
    {
      name: "Emily Watson",
      title: "Partner",
      education: "University of Chicago Law School, J.D. | Northwestern University, B.A.",
      barAdmissions: "Illinois, Wisconsin, Indiana",
      practiceAreas: ["Estate Planning", "Tax Law", "Wealth Management"],
      experience: "12+ years",
      bio: "Emily provides sophisticated estate planning and tax strategies for high-net-worth individuals and families. Her comprehensive approach to wealth preservation has helped clients protect and transfer billions in assets across generations.",
      notable: "Certified Public Accountant (CPA) and estate planning specialist"
    },
    {
      name: "David Kim",
      title: "Associate",
      education: "NYU School of Law, J.D. | NYU Stern School of Business, M.B.A.",
      barAdmissions: "New York, New Jersey",
      practiceAreas: ["Corporate Law", "Securities", "Startup Law"],
      experience: "8+ years",
      bio: "David focuses on emerging companies and venture capital transactions. His business background provides valuable insight into the commercial aspects of legal decisions, making him a trusted advisor to entrepreneurs and investors.",
      notable: "Former investment banker with deep understanding of capital markets"
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
            <h1 className="text-5xl font-bold mb-6">Our <span className="text-gold">Legal Team</span></h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Meet our experienced attorneys who bring decades of combined expertise and unwavering 
              dedication to achieving exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Experience You Can Trust</h2>
            <p className="text-xl text-navy/70 max-w-4xl mx-auto">
              Our attorneys are graduates of top-tier law schools and bring diverse backgrounds and 
              specializations to provide comprehensive legal solutions across all practice areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "100+", label: "Years Combined Experience" },
              { number: "15", label: "Top-Tier Law Schools" },
              { number: "25", label: "Bar Admissions" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-navy/70 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Profiles */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Photo Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className="bg-gold/10 rounded-lg aspect-square flex items-center justify-center border-4 border-gold/20">
                    <div className="text-6xl text-gold">👤</div>
                  </div>
                </div>
                
                {/* Attorney Information */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold text-navy mb-2">{attorney.name}</h3>
                      <p className="text-xl text-gold font-semibold mb-1">{attorney.title}</p>
                      <p className="text-navy/70">{attorney.experience} of experience</p>
                    </div>
                    
                    <div className="bg-cream rounded-lg p-6 border-l-4 border-gold">
                      <p className="text-navy/80 leading-relaxed">{attorney.bio}</p>
                      {attorney.notable && (
                        <div className="mt-4 p-3 bg-gold/10 rounded-md">
                          <p className="text-gold font-semibold text-sm">Notable Achievement:</p>
                          <p className="text-navy/80 text-sm">{attorney.notable}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Education</h4>
                        <p className="text-navy/70 text-sm">{attorney.education}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Bar Admissions</h4>
                        <p className="text-navy/70 text-sm">{attorney.barAdmissions}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Practice Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {attorney.practiceAreas.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-medium">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recognition & Awards</h2>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Our attorneys have been recognized by leading legal publications and organizations 
              for their excellence and contributions to the legal profession.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Best Lawyers in America",
              "Super Lawyers",
              "Chambers & Partners",
              "Legal 500",
              "Martindale-Hubbell AV Rated",
              "American Bar Association",
              "State Bar Association Leaders",
              "Pro Bono Service Awards"
            ].map((recognition, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold/20 rounded-lg p-6 mb-4">
                  <div className="text-3xl text-gold mb-2">🏆</div>
                </div>
                <h3 className="font-semibold text-cream">{recognition}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl text-navy/70 mb-8">
            Our experienced attorneys are ready to provide you with the exceptional legal representation 
            you deserve. Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-sm hover:bg-dark-gold transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              Schedule Consultation
            </button>
            <button className="border-2 border-navy text-navy px-8 py-4 rounded-sm hover:bg-navy hover:text-cream transition-colors duration-300 font-semibold text-lg tracking-wide uppercase">
              View Practice Areas
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
