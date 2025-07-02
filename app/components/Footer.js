export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-gold">Aequitas</span> Law Partners
            </div>
            <p className="text-cream/90 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Committed to providing exceptional legal services with integrity, expertise, and unwavering dedication to our clients' success.
            </p>
            <div className="text-xs sm:text-sm text-cream/70">
              <p>Licensed to practice law in multiple jurisdictions</p>
              <p className="mt-2">© 2025 Aequitas Law Partners. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="/about" className="text-cream/80 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="/practice-areas" className="text-cream/80 hover:text-gold transition-colors">Practice Areas</a></li>
              <li><a href="/attorneys" className="text-cream/80 hover:text-gold transition-colors">Our Attorneys</a></li>
              <li><a href="/resources" className="text-cream/80 hover:text-gold transition-colors">Legal Resources</a></li>
              <li><a href="/contact" className="text-cream/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Information</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-cream/80">
              <p>123 Legal Plaza, Suite 500</p>
              <p>Metropolitan City, ST 12345</p>
              <p className="mt-2 sm:mt-3">
                <span className="block">Phone: (555) 123-4567</span>
                <span className="block">Fax: (555) 123-4568</span>
              </p>
              <p className="mt-2 sm:mt-3">
                <a href="mailto:info@aequitaslaw.com" className="hover:text-gold transition-colors">
                  info@aequitaslaw.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-light-bronze/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-warm-white/70 mb-4 md:mb-0">
              <a href="/privacy" className="hover:text-light-bronze transition-colors mr-6">Privacy Policy</a>
              <a href="/terms" className="hover:text-light-bronze transition-colors mr-6">Terms of Service</a>
              <a href="/disclaimer" className="hover:text-light-bronze transition-colors">Legal Disclaimer</a>
            </div>
            <div className="text-sm text-warm-white/70">
              Attorney Advertising | Prior Results Do Not Guarantee Similar Outcomes
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
