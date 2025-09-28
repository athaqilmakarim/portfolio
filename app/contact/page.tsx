import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      description: "Let&apos;s discuss your project or just say hello",
      value: "athaqil.makarim@gmail.com",
      href: "mailto:athaqil.makarim@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "Muhammad Athaqil Makarim",
      href: "https://www.linkedin.com/in/muhammad-athaqil-makarim-706238200",
      color: "text-blue-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      description: "Check out my code and projects",
      value: "athaqilmakarim",
      href: "https://github.com/athaqilmakarim",
      color: "text-gray-800"
    }
  ];

  const availability = [
    "Open to graduate software engineer roles",
    "Available for frontend development projects", 
    "Interested in UI/UX design opportunities",
    "Seeking data analyst positions"
  ];

  return (
    <div className="container max-w-4xl mx-auto">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and design.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card key={method.title} className="group hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{method.title}</h3>
                <p className="text-text/70 text-sm mb-4">{method.description}</p>
                <Link
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`font-medium hover:underline transition-colors duration-300 ${method.color}`}
                >
                  {method.value}
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Availability Section */}
        <Card className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text mb-6">Current Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availability.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-surface/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-text/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-primary/5 to-surface/30 border-primary/20">
          <div className="py-8">
            <h2 className="text-2xl font-bold text-text mb-4">Ready to Get Started?</h2>
            <p className="text-text/80 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:athaqil.makarim@gmail.com">
                <Button variant="primary" size="lg">
                  Send me an email
                </Button>
              </Link>
              <Link href="/files/CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg">
                  Download my CV
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Response Time */}
        <div className="text-center mt-8">
          <p className="text-text/60 text-sm">
            I typically respond within 24 hours. Looking forward to hearing from you! ✨
          </p>
        </div>
      </Section>
    </div>
  );
}
