import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import Tag from '@/components/Tag';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-3xl mx-auto px-4">
      {/* Back Button */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <Link href="/projects" className="inline-flex items-center text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline hover:-translate-y-0.5 smooth-transition text-sm sm:text-base">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <Section className="text-center animate-fade-in-up animate-delay-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>{project.title}</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6" style={{ color: 'var(--text)', opacity: '0.8' }}>{project.summary}</p>
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-6 md:mb-8">
          {project.tags.map((tag) => (
            <Tag key={tag} className="hover-scale text-xs">{tag}</Tag>
          ))}
        </div>
      </Section>

      {project.image && (
        <div className="mb-8 md:mb-10 lg:mb-14 rounded-[var(--radius)] overflow-hidden border border-border shadow-md animate-fade-in-up animate-delay-300 hover-lift">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="space-y-8 md:space-y-10 lg:space-y-14">
        {project.description && (
          <Section className="animate-fade-in-up animate-delay-400">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Project Overview</h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text)', opacity: '0.8' }}>
              {project.description}
            </p>
          </Section>
        )}

        <Section className="animate-fade-in-up animate-delay-500">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Role & Responsibilities</h2>
          <p className="text-sm sm:text-base mb-3 md:mb-4" style={{ color: 'var(--text)', opacity: '0.8' }}>
            As a {project.role}, my responsibilities included:
          </p>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm sm:text-base" style={{ color: 'var(--text)', opacity: '0.8' }}>
            <li>Designing and implementing user interfaces.</li>
            <li>Collaborating with backend teams for API integration.</li>
            <li>Ensuring responsive and accessible design principles.</li>
            <li>Conducting user research and usability testing.</li>
            <li>Analyzing data to inform design and development decisions.</li>
          </ul>
        </Section>

        {project.process && project.process.length > 0 && (
          <Section className="animate-fade-in-up animate-delay-600">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Process</h2>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm sm:text-base" style={{ color: 'var(--text)', opacity: '0.8' }}>
              {project.process.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ul>
          </Section>
        )}

        <Section className="animate-fade-in-up animate-delay-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Technologies</h2>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech} className="hover-scale text-xs">{tech}</Tag>
            ))}
          </div>
        </Section>

        {project.outcomes && project.outcomes.length > 0 && (
          <Section className="animate-fade-in-up animate-delay-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4" style={{ color: 'var(--text)' }}>Outcomes</h2>
            <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm sm:text-base" style={{ color: 'var(--text)', opacity: '0.8' }}>
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors duration-200 ease-in-out focus-outline hover:-translate-y-0.5 smooth-transition text-sm sm:text-base"
                    style={{ color: 'var(--primary)' }}
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </Section>
        )}
      </div>
    </div>
  );
}
