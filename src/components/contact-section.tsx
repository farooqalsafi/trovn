"use client";

import { useState, FormEvent } from "react";
import { WHAT_HAPPENS_NEXT } from "@/lib/constants";
import { SectionLabel } from "./section-label";
import { SlideIn } from "./animations/slide-in";
import { Mail, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Gradient orb — bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,58,237,0.06) 0%, transparent 70%)" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <SlideIn from="left">
            <SectionLabel text="Get In Touch" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Let&apos;s talk about your{" "}
              <span className="text-brand-primary">AI ambitions</span>
            </h2>
            <p className="text-brand-gray-600 mb-8">
              Whether you have a clear project in mind or are just exploring
              existing initiatives, we&apos;d love to hear from you. Tell us what AI
              should improve first.
            </p>

            <a
              href="mailto:hello@trovn.ai"
              className="inline-flex items-center gap-2 text-brand-primary font-medium mb-8"
            >
              <Mail className="w-5 h-5" />
              hello@trovn.ai
            </a>

            <div>
              <h3 className="text-lg font-semibold text-brand-dark mb-4">
                What happens next?
              </h3>
              <ol className="space-y-3">
                {WHAT_HAPPENS_NEXT.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-accent-bg text-brand-primary text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-brand-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </SlideIn>

          {/* Right — Form */}
          <SlideIn from="right" delay={0.2}>
            {status === "success" ? (
              <div className="bg-brand-accent-bg rounded-xl p-12 flex flex-col items-center justify-center text-center h-full">
                <CheckCircle className="w-12 h-12 text-brand-primary mb-4" />
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  Inquiry sent!
                </h3>
                <p className="text-brand-gray-600">
                  We&apos;ll review your message and get back within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 border border-border space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-dark mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-brand-dark mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-dark mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-dark mb-1.5"
                  >
                    What should AI improve first?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors resize-none"
                    placeholder="Tell us about the problem you'd like to solve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full gradient-brand text-white font-medium rounded-full py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
