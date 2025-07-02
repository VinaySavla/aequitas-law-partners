'use client';

import { useState } from 'react';

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-navy bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-cream max-w-2xl w-full rounded-lg shadow-2xl border-2 border-gold max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gold">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-navy">Legal Disclaimer</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gold hover:text-navy transition-colors duration-200 p-1"
              aria-label="Close disclaimer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4 text-navy text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold">
              ATTORNEY ADVERTISING. PRIOR RESULTS DO NOT GUARANTEE A SIMILAR OUTCOME.
            </p>
            
            <p>
              The information contained on this website is for general informational purposes only and does not constitute legal advice. 
              The content on this site should not be relied upon as a substitute for competent legal counsel.
            </p>
            
            <p>
              Transmission of information from this website does not create an attorney-client relationship between you and 
              Aequitas Law Partners. An attorney-client relationship is established only after we have agreed to represent you 
              and you have signed a written engagement agreement.
            </p>
            
            <p>
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
              Before you decide, ask us to send you free written information about our qualifications and experience.
            </p>
            
            <p className="font-semibold text-gold">
              By continuing to use this website, you acknowledge that you have read and understood this disclaimer.
            </p>
          </div>
          
          <div className="mt-4 sm:mt-6 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gold text-navy px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-dark-gold transition-colors duration-300 font-semibold tracking-wide uppercase text-sm sm:text-base"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
