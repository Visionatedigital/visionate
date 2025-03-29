'use client';

import Navbar from '../navbar';
import Footer from '../footer';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-[#7b7b7b]">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
              <p>
                By accessing or using the services of Visionate Digital, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Services</h2>
              <p>
                Visionate Digital provides AI-powered software solutions, consulting, and digital services. We reserve the right to withdraw or amend our services without notice.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI Integration Services</li>
                <li>Software Development</li>
                <li>Digital Transformation Consulting</li>
                <li>Data Analytics Solutions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by Visionate Digital and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Not use the service for any illegal purposes</li>
                <li>Not infringe on the rights of others</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                Visionate Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at{' '}
                <a href="mailto:visionatedigital@gmail.com" className="text-primary hover:underline">
                  visionatedigital@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 