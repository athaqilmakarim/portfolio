import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-border text-text/70">
      <div className="container max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Aqil Makarim. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link
            href="mailto:athaqilm@gmail.com"
            className="link-hover-primary focus-outline"
            style={{ textDecoration: 'none' }}
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/muhammad-athaqil-makarim"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-primary focus-outline"
            style={{ textDecoration: 'none' }}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/athaqilm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-primary focus-outline"
            style={{ textDecoration: 'none' }}
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
