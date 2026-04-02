import { FOOTER_SERVICES, FOOTER_COMPANY } from "@/lib/constants";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-brand-primary-light">
              trovn
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Trovn helps teams design, build, and operationalise AI solutions
              that create measurable business value.
            </p>
            <a
              href="mailto:hello@trovn.ai"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@trovn.ai
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Trovn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
