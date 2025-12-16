'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HubSpotForm({ locale }: { locale: string }) {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations('contact.form');

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Create form when script loads
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "244622464",
          formId: "2f8dc52a-84bc-44bf-913d-8e713c553b34",
          region: "na2",
          target: '#hubspot-form-container',
          onFormSubmitted: function() {
            // Show modal on successful submission
            setShowModal(true);

            // Hide the default HubSpot success message
            const successMessage = document.querySelector('.submitted-message');
            if (successMessage) {
              (successMessage as HTMLElement).style.display = 'none';
            }
          }
        });
      }
    };

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 max-w-md w-full animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-4">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {locale === 'id' ? 'Terima Kasih!' : 'Thank You!'}
              </h3>

              <p className="text-gray-300 mb-6">
                {locale === 'id'
                  ? 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.'
                  : 'Your message has been sent successfully. We will contact you soon.'}
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105"
              >
                {locale === 'id' ? 'Tutup' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add type definition for HubSpot
declare global {
  interface Window {
    hbspt: any;
  }
}
