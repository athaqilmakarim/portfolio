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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/projects" className="inline-flex items-center text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline">
          &larr; Back to Projects
        </Link>
      </div>

      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text">{project.title}</h1>
        <p className="text-lg md:text-xl text-text/80 mb-6">{project.summary}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Section>

      {project.image && (
        <div className="mb-10 md:mb-14 rounded-[var(--radius)] overflow-hidden border border-border shadow-md">
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

      <div className="space-y-10 md:space-y-14">
        {project.description && (
          <Section>
            <h2 className="text-3xl font-bold mb-4 text-text">Project Overview</h2>
            <p className="text-text/80">
              {project.description}
            </p>
          </Section>
        )}

        <Section>
          <h2 className="text-3xl font-bold mb-4 text-text">Role & Responsibilities</h2>
          <p className="text-text/80 mb-4">
            As a {project.role}, my responsibilities included:
          </p>
          <ul className="list-disc list-inside text-text/80 space-y-2">
            <li>Designing and implementing user interfaces.</li>
            <li>Collaborating with backend teams for API integration.</li>
            <li>Ensuring responsive and accessible design principles.</li>
            <li>Conducting user research and usability testing.</li>
            <li>Analyzing data to inform design and development decisions.</li>
          </ul>
        </Section>

        {project.process && project.process.length > 0 && (
          <Section>
            <h2 className="text-3xl font-bold mb-4 text-text">Process</h2>
            <ul className="list-disc list-inside text-text/80 space-y-2">
              {project.process.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ul>
          </Section>
        )}

        <Section>
          <h2 className="text-3xl font-bold mb-4 text-text">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Section>

        {project.outcomes && project.outcomes.length > 0 && (
          <Section>
            <h2 className="text-3xl font-bold mb-4 text-text">Outcomes</h2>
            <ul className="list-disc list-inside text-text/80 space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors duration-200 ease-in-out focus-outline"
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
