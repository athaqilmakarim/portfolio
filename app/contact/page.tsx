import Section from '@/components/Section';
import Card from '@/components/Card';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container max-w-3xl mx-auto text-center">
      <Section>
        <h1 className="text-4xl font-bold mb-6 text-text">Contact Me</h1>
        <p className="text-lg text-text/80 mb-10">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <Card className="max-w-md mx-auto p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-text">Let&apos;s Connect</h2>
          <div className="space-y-4 text-lg">
            <p>
              Email:{' '}
              <Link
                href="mailto:athaqilm@gmail.com"
                className="text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline"
              >
                athaqilm@gmail.com
              </Link>
            </p>
            <p>
              LinkedIn:{' '}
              <Link
                href="https://linkedin.com/in/muhammad-athaqil-makarim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline"
              >
                Muhammad Athaqil Makarim
              </Link>
            </p>
            <p>
              GitHub:{' '}
              <Link
                href="https://github.com/athaqilm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline"
              >
                athaqilm
              </Link>
            </p>
          </div>
          <p className="text-text/70 mt-8 text-base">
            Open to graduate software engineer / frontend / data roles.
          </p>
        </Card>
      </Section>
    </div>
  );
}
