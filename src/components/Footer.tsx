import { MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-[#F97316]" />
              <span className="text-xl font-bold text-white">MKE Results</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Helping local businesses dominate Google Maps and grow their
              local presence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#F97316] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#F97316] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#F97316] transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@mkeresults.com"
                  className="text-gray-400 hover:text-[#F97316] transition-colors"
                >
                  hello@mkeresults.com
                </a>
              </li>
              <li className="text-gray-400">Wisconsin, USA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} MKE Results. All rights reserved. Results may
            vary by industry and location.
          </p>
        </div>
      </div>
    </footer>
  );
}
